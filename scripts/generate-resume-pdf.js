const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const outPrimary = path.join(__dirname, '..', 'public', 'celestia_hall_resume.pdf');
const outSecondary = path.join(__dirname, '..', 'public', 'resume.pdf');

const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 36, bottom: 36, left: 44, right: 44 },
  info: {
    Title: 'Celestia Hall Resume',
    Author: 'Celestia Hall',
  },
});

const stream = fs.createWriteStream(outPrimary);
doc.pipe(stream);

const title = 'CELESTIA HALL';
const contact = '1(406)214-7059 | celestia.hall44@gmail.com | Polson, MT';
const role = 'Frontend Developer';
const links = 'Celestia Hall | LinkedIn | GitHub celestiahall44 (Celestia Hall) | Portfolio';

const summary = 'Front-End Developer and bootcamp graduate with hands-on experience building responsive, user-focused web applications using HTML, CSS, JavaScript, React, Vue.js, and Tailwind CSS. Skilled at transforming design concepts into clean, functional, and accessible interfaces. Passionate about creating intuitive user experiences, solving technical challenges, and continuously expanding knowledge of modern web development practices. Eager to contribute to a collaborative development team while growing as a software engineer.';

const skillLines = [
  'Programming Languages: TypeScript, JavaScript, HTML, CSS',
  'Frameworks: React, TailwindCSS, Firebase, NextJS, Redux, React',
  'Tools & Other platforms: Vercel, GitHub, Vite, Figma, VSCode',
];

const projectLines = [
  'Summarist: Summarist Home Page | GitHub: celestiahall44/Advanced-Internship',
  'Summarist is a book summary web application that helps users explore key insights from popular books. I built this project to enhance my frontend development skills, focusing on responsive design, interactive features, and a seamless user experience.',
  'Ultraverse: Ultraverse | GitHub: celestiahall44/celestia-internship',
  'Ultraverse Internship Project is a responsive web application built during my internship to showcase my frontend development skills. I designed and developed the site using modern web technologies, focusing on user experience, responsive design, and interactive functionality while applying real-world development practices.',
];

const skintristicBullets = [
  'Architected real-time skin analysis platform using OpenAI Vision API and Next.js, achieving 98% detection accuracy across diverse skin conditions',
  'Developed responsive UI with TailwindCSS and GSAP animations, implementing dynamic skincare recommendation cards with 60% improved engagement',
  'Optimized performance using Next.js Server Components and Lottie animations, achieving sub-2-second analysis time for skin condition detection',
  'Built custom animation system using GSAP timeline for seamless user experience during skin analysis processing, increasing user retention by 40%',
  'Designed modular component library with TailwindCSS for skincare product displays, enabling rapid A/B testing of recommendation layouts',
  'Implemented efficient image processing pipeline combining OpenAI Vision API with 4D Mini model for enhanced accuracy in skin tone and texture analysis',
];

const upsBullets = [
  'Operated delivery vehicles while adhering to safety protocols and traffic regulations.',
  'Managed timely delivery of packages to designated locations within assigned routes.',
  'Maintained accurate records of deliveries, pickups, and customer interactions.',
  'Communicated effectively with dispatchers regarding route changes and delivery issues.',
  'Encourage and facilitate opportunities for new shipping leads.',
];

const unicorBullets = [
  'Managed inventory of raw materials totaling 3 million dollars.',
  'Received shipments to fulfill purchase orders, communicated and problem solved with vendors, prioritized and assigned materials to jobs in order to fulfill contracts.',
  'Experience in quality assurance and inspecting raw and finished material.',
  'General warehouse management including forklift operation, safety regulation, ordering supplies, leading and organizing co-workers for highest priority and efficiency.',
  'Organized wall-to-wall inventory for annual and auditing purposes.',
  'Experience with hands-on labor assembly work and shipping of finished products.',
  'Recommended personnel to advance into positions best suited for highest company productivity and personal growth.',
];

function sectionHeader(text) {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(11).text(text, { underline: false });
  doc.moveDown(0.2);
}

function bullet(text) {
  const indent = 12;
  const x = doc.x;
  const y = doc.y;
  doc.font('Helvetica').fontSize(9.5).text('•', x, y, { continued: true });
  doc.text(`  ${text}`, {
    width: doc.page.width - doc.page.margins.left - doc.page.margins.right - indent,
    indent: 8,
    lineGap: 1,
  });
}

function ensureSpace(lines = 4) {
  const estimated = lines * 14;
  if (doc.y + estimated > doc.page.height - doc.page.margins.bottom) {
    doc.addPage();
  }
}

doc.font('Helvetica-Bold').fontSize(17).text(title, { align: 'left' });
doc.font('Helvetica').fontSize(9.5).text(contact);
doc.font('Helvetica-Bold').fontSize(11).text(role);
doc.font('Helvetica').fontSize(9.5).text(links);

doc.moveDown(0.5);
doc.font('Helvetica').fontSize(9.5).text(summary, { lineGap: 1 });

sectionHeader('Technical Skills');
skillLines.forEach((line) => {
  doc.font('Helvetica').fontSize(9.5).text(line, { lineGap: 1 });
});

sectionHeader('Projects (personal)');
doc.font('Helvetica-Bold').fontSize(9.5).text(projectLines[0]);
bullet(projectLines[1]);
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9.5).text(projectLines[2]);
bullet(projectLines[3]);

sectionHeader('Professional Experience');
ensureSpace(8);
doc.font('Helvetica-Bold').fontSize(9.5).text('Skinstric AI - Frontend Engineer Skintristic  Remote | May 2026 - June 2026');
skintristicBullets.forEach((line) => bullet(line));

ensureSpace(7);
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9.5).text('UPS - Delivery Driver  Onsite | October 2019 - Present');
upsBullets.forEach((line) => bullet(line));

ensureSpace(9);
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fontSize(9.5).text('Unicor - Receiving & Inventory Clerk  Onsite | April 2014 - September 2017');
unicorBullets.forEach((line) => bullet(line));

sectionHeader('Education');
doc.font('Helvetica').fontSize(9.5).text('Frontend Simplified | Certificate  January 2026 - July 2026');
doc.font('Helvetica').fontSize(9.5).text('Coastline Community College | AA Social & Behavioral Science & AA Math & Science  January 2019');

sectionHeader('Other');
doc.font('Helvetica').fontSize(9.5).text('Interests: Animal rescue, gardening, photography.');
doc.font('Helvetica').fontSize(9.5).text('References available on request.');

doc.end();

stream.on('finish', () => {
  fs.copyFileSync(outPrimary, outSecondary);
  console.log('Resume PDFs updated:');
  console.log(`- ${outPrimary}`);
  console.log(`- ${outSecondary}`);
});
