// Libraries
const fs = require('fs');
const jsdom = require('jsdom');
const { assert } = require('chai');

// HTML
const srcHtml = fs.readFileSync('./src/index.html');
const doc = jsdom.jsdom(srcHtml);

// Tests
describe('The webpage', () => {

  /**
   * HEADER
   */
  describe('header', () => {
    it('should exist', () => {
      const header = doc.querySelector('.header');
      assert.isOk(header);
    });

    it('should have a non-empty title', () => {
      const h1 = doc.querySelector('.header h1');
      assert.isOk(h1);
      assert.isOk(h1.textContent);
    });

    it('should have a non-empty description', () => {
      const h2 = doc.querySelector('.header h2');
      assert.isOk(h2);
      assert.isOk(h2.textContent);
    });
  });


  /**
   * TAGLINE
   */
  describe('tagline', () => {
    it('should exist', () => {
      const tagline = doc.querySelector('.tagline');
      assert.isOk(tagline);
    });

    it('should have a non-empty h3 tag', () => {
      const h3 = doc.querySelector('.tagline h3');
      assert.isOk(h3);
      assert.isOk(h3.textContent);
    });

    it('should have a descriptive paragraph', () => {
      const p = doc.querySelector('.tagline p');
      assert.isOk(p);
      assert.isOk(p.textContent);
    });
  });
  

  /**
   * SKILLS
   */
  describe('skills', () => {
    it('should exist', () => {
      const skills = doc.querySelector('.skills');
      assert.isOk(skills);
    });

    it('should have a non-empty h3 tag', () => {
      const h3 = doc.querySelector('.skills h3');
      assert.isOk(h3);
      assert.isOk(h3.textContent);
    });

    it('should have a descriptive paragraph', () => {
      const p = doc.querySelector('.skills p');
      assert.isOk(p);
      assert.isOk(p.textContent);
    });

    it('should have an unordered list of your skills', () => {
      const ul = doc.querySelector('.skills ul');
      assert.isOk(ul);
    });

    it('should have at least 3 skills', () => {
      const skillItems = doc.querySelectorAll('.skills ul li');
      assert.isAtLeast(skillItems.length, 3);
    });

    it('should have one skill that contains HTML', () => {
      const skillItems = Array.from(doc.querySelectorAll('.skills ul li'));
      const htmlRegex = /html/i;

      const skillsWithHtml = skillItems
        .map(li => li.textContent)
        .filter(skill => htmlRegex.test(skill));

      assert.equal(skillsWithHtml.length, 1);
    });
  });


  /**
   * CONTACT
   */
  describe('contact', () => {
    it('should exist', () => {
      const contact = doc.querySelector('.contact');
      assert.isOk(contact);
    });

    it('should have a non-empty h3 tag', () => {
      const h3 = doc.querySelector('.contact h3');
      assert.isOk(h3);
      assert.isOk(h3.textContent);
    });

    it('should have a descriptive paragraph', () => {
      const p = doc.querySelector('.contact p');
      assert.isOk(p);
      assert.isOk(p.textContent);
    });

    it('should have a link with an href within the paragraph', () => {
      const a = doc.querySelector('.contact p a');
      assert.isOk(a);
      assert.isOk(a.textContent);
      assert.isOk(a.getAttribute('href'));
    });
  });

});
