// Import Required Libraries
const fs = require('fs');
const jsdom = require('jsdom');
const { assert } = require('chai');

// Load and Parse HTML
const srcHtml = fs.readFileSync('./src/index.html');
const doc = jsdom.jsdom(srcHtml);

// Test Suite for Webpage Validation
describe('Webpage Structure and Content', () => {

  /**
   * HEADER SECTION
   */
  describe('Header Section', () => {
    it('should include a `.header` element', () => {
      const header = doc.querySelector('.header');
      assert.isOk(header, 'A `.header` element is required.');
    });

    it('should include a non-empty `h1` title within `.header`', () => {
      const h1 = doc.querySelector('.header h1');
      assert.isOk(h1, '`h1` is missing in `.header`.');
      assert.isOk(h1.textContent, '`h1` in `.header` should not be empty.');
    });

    it('should include a non-empty `h2` description within `.header`', () => {
      const h2 = doc.querySelector('.header h2');
      assert.isOk(h2, '`h2` is missing in `.header`.');
      assert.isOk(h2.textContent, '`h2` in `.header` should not be empty.');
    });
  });

  /**
   * TAGLINE SECTION
   */
  describe('Tagline Section', () => {
    it('should include a `.tagline` element', () => {
      const tagline = doc.querySelector('.tagline');
      assert.isOk(tagline, 'A `.tagline` element is required.');
    });

    it('should include a non-empty `h3` within `.tagline`', () => {
      const h3 = doc.querySelector('.tagline h3');
      assert.isOk(h3, '`h3` is missing in `.tagline`.');
      assert.isOk(h3.textContent, '`h3` in `.tagline` should not be empty.');
    });

    it('should include a descriptive `p` within `.tagline`', () => {
      const p = doc.querySelector('.tagline p');
      assert.isOk(p, '`p` is missing in `.tagline`.');
      assert.isOk(p.textContent, '`p` in `.tagline` should not be empty.');
    });
  });

  /**
   * SKILLS SECTION
   */
  describe('Skills Section', () => {
    it('should include a `.skills` element', () => {
      const skills = doc.querySelector('.skills');
      assert.isOk(skills, 'A `.skills` element is required.');
    });

    it('should include a non-empty `h3` within `.skills`', () => {
      const h3 = doc.querySelector('.skills h3');
      assert.isOk(h3, '`h3` is missing in `.skills`.');
      assert.isOk(h3.textContent, '`h3` in `.skills` should not be empty.');
    });

    it('should include a descriptive `p` within `.skills`', () => {
      const p = doc.querySelector('.skills p');
      assert.isOk(p, '`p` is missing in `.skills`.');
      assert.isOk(p.textContent, '`p` in `.skills` should not be empty.');
    });

    it('should include a `ul` with at least 3 `li` elements in `.skills`', () => {
      const ul = doc.querySelector('.skills ul');
      assert.isOk(ul, '`ul` is missing in `.skills`.');
      const skillItems = doc.querySelectorAll('.skills ul li');
      assert.isAtLeast(skillItems.length, 3, '`ul` in `.skills` should contain at least 3 `li` elements.');
    });

    it('should include one `li` mentioning HTML as a skill', () => {
      const skillItems = Array.from(doc.querySelectorAll('.skills ul li'));
      const htmlSkill = skillItems.some(li => /html/i.test(li.textContent));
      assert.isTrue(htmlSkill, 'One skill in `.skills ul` must mention HTML.');
    });
  });

  /**
   * CONTACT SECTION
   */
  describe('Contact Section', () => {
    it('should include a `.contact` element', () => {
      const contact = doc.querySelector('.contact');
      assert.isOk(contact, 'A `.contact` element is required.');
    });

    it('should include a non-empty `h3` within `.contact`', () => {
      const h3 = doc.querySelector('.contact h3');
      assert.isOk(h3, '`h3` is missing in `.contact`.');
      assert.isOk(h3.textContent, '`h3` in `.contact` should not be empty.');
    });

    it('should include a descriptive `p` within `.contact`', () => {
      const p = doc.querySelector('.contact p');
      assert.isOk(p, '`p` is missing in `.contact`.');
      assert.isOk(p.textContent, '`p` in `.contact` should not be empty.');
    });

    it('should include a link with a valid `href` in `.contact`', () => {
      const a = doc.querySelector('.contact p a');
      assert.isOk(a, 'A link (`a`) is required in `.contact p`.');
      assert.isOk(a.textContent, '`a` in `.contact` should not be empty.');
      assert.isOk(a.getAttribute('href'), '`a` in `.contact` must have a valid `href`.');
    });
  });
});
