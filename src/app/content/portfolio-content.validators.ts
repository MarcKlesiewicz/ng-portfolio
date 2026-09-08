import { PortfolioContentSnapshot, ProjectStoryBlock } from './models/portfolio-content.model';

const ALLOWED_PROTOCOLS = new Set(['http:', 'https:', 'mailto:']);
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validatePortfolioContent(content: PortfolioContentSnapshot): void {
  const slugs = new Set<string>();
  const legacyIds = new Set<string>();
  const technologyIds = new Set(content.technologies.map((technology) => technology.id));

  for (const project of content.projects) {
    assert(project.name.trim().length > 0, `Project ${project.legacyId} requires a name.`);
    assert(SLUG_PATTERN.test(project.slug), `Project ${project.name} has an invalid slug: ${project.slug}.`);
    assert(!slugs.has(project.slug), `Duplicate project slug: ${project.slug}.`);
    assert(!legacyIds.has(project.legacyId), `Duplicate legacy project id: ${project.legacyId}.`);
    slugs.add(project.slug);
    legacyIds.add(project.legacyId);
    validateMedia(project.thumbnail, `${project.name} thumbnail`);
    if (project.logo) validateMedia(project.logo, `${project.name} logo`);
    if (project.liveUrl) validateUrl(project.liveUrl, `${project.name} live URL`);
    if (project.githubUrl) validateUrl(project.githubUrl, `${project.name} GitHub URL`);
    project.technologies.forEach((id) =>
      assert(technologyIds.has(id), `${project.name} references unknown technology: ${id}.`)
    );
    project.blocks.forEach((block, index) => validateBlock(block, `${project.name} block ${index + 1}`));
  }

  validateMedia(content.profile.portrait, 'Profile portrait');
  if (content.profile.avatar) validateMedia(content.profile.avatar, 'Profile avatar');
  content.profile.contacts.forEach((link) => validateUrl(link.url, `Contact ${link.label}`));
  content.profile.capabilityGroups
    .flatMap((group) => group.technologyIds)
    .forEach((id) => assert(technologyIds.has(id), `Profile references unknown technology: ${id}.`));
}

function validateBlock(block: ProjectStoryBlock, context: string): void {
  switch (block.kind) {
    case 'heading':
    case 'paragraph':
      assert(block.text.trim().length > 0, `${context} cannot be empty.`);
      return;
    case 'list':
      assert(block.items.length > 0, `${context} requires at least one list item.`);
      return;
    case 'media':
      validateMedia(block.media, context);
      return;
    case 'callout':
      assert(block.title.trim().length > 0 && block.text.trim().length > 0, `${context} is incomplete.`);
      return;
    case 'links':
      assert(block.links.length > 0, `${context} requires at least one link.`);
      block.links.forEach((link) => validateUrl(link.url, `${context} link ${link.label}`));
      return;
    default:
      return assertNever(block);
  }
}

function validateMedia(media: { src: string; alt: string; width: number; height: number }, context: string): void {
  assert(media.src.startsWith('assets/'), `${context} must use a repository asset path.`);
  assert(media.width > 0 && media.height > 0, `${context} requires intrinsic dimensions.`);
  assert(typeof media.alt === 'string', `${context} requires alt metadata.`);
}

function validateUrl(url: string, context: string): void {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    throw new Error(`${context} is not a valid URL.`);
  }
  assert(ALLOWED_PROTOCOLS.has(parsed.protocol), `${context} uses an unsafe protocol.`);
}

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function assertNever(value: never): never {
  throw new Error(`Unsupported story block: ${JSON.stringify(value)}`);
}
