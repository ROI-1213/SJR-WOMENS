import type { AvailableProgramme } from './institute';

interface CourseDetails {
  level: 'undergraduate' | 'postgraduate';
  summary: string;
  introduction: string;
  overview: string;
  learning: { title: string; description: string }[];
  skills: string[];
  careers: string;
  benefits: { title: string; description: string }[];
  syllabi: { label: string; href: string }[];
}

const syllabus = 'https://bcu.ac.in/uploads/syllabus';

export const courseDetails: Record<AvailableProgramme['id'], CourseDetails> = {
  bcom: {
    level: 'undergraduate',
    summary: 'Accounting, taxation and the financial decisions behind a business.',
    introduction: 'Learn how businesses record transactions, report results and make financial decisions. B.Com provides an undergraduate foundation for students interested in accounting, finance and the rules that govern commercial activity.',
    overview: 'The programme builds from financial accounting to corporate and cost accounting. Exercises in preparing accounts, calculating tax and reviewing business scenarios help students apply commercial concepts to practical questions.',
    learning: [
      { title: 'Financial and corporate accounting', description: 'Record transactions, prepare accounts and interpret financial statements.' },
      { title: 'Costs and financial management', description: 'Analyse business costs and examine financing and investment decisions.' },
      { title: 'Taxation and audit', description: 'Work through income tax and GST concepts and examine the purpose of auditing.' },
      { title: 'Business regulation and economics', description: 'Study commercial rules and use economic concepts to understand business decisions.' },
    ],
    skills: ['Preparing and interpreting financial records', 'Analysing costs and financial information', 'Applying tax concepts to business transactions'],
    careers: 'Explore junior roles in accounts, finance operations, banking, audit support or tax support. Further study may include M.Com or professional routes such as chartered accountancy or cost and management accountancy, each with separate entry and examination requirements.',
    benefits: [
      { title: 'Understand the figures behind a business', description: 'Trace transactions through to the statements that managers, investors and lenders use.' },
      { title: 'Build a broad commerce foundation', description: 'Study accounting alongside taxation and regulation before deciding where to deepen your expertise.' },
    ],
    syllabi: [{ label: 'B.Com Regular syllabus (PDF)', href: `${syllabus}/UG_Syllabus/commerce/B.Com_Regular_V_&_VI_Sem.pdf` }],
  },
  bba: {
    level: 'undergraduate',
    summary: 'Management, marketing, people and entrepreneurship.',
    introduction: 'BBA examines how organisations plan their work, serve customers and manage teams. It introduces the decisions that managers and entrepreneurs make when they bring people, resources and business goals together.',
    overview: 'Students study management, marketing, human resources and entrepreneurship alongside accounting and market analysis. Case studies, discussion and applied exercises connect those subjects to decisions about customers, staffing and new ventures.',
    learning: [
      { title: 'Management and organisational behaviour', description: 'Examine how managers plan, structure work and lead teams through change.' },
      { title: 'Marketing and market analysis', description: 'Analyse customer needs and consider how pricing, distribution and promotion shape demand.' },
      { title: 'Human resource management', description: 'Explore recruitment, training, performance review and compensation.' },
      { title: 'Entrepreneurship', description: 'Evaluate business ideas and consider the resources and plans needed to start a venture.' },
    ],
    skills: ['Analysing a business case and presenting a recommendation', 'Planning work and coordinating with a team', 'Evaluating markets and communicating a business idea'],
    careers: 'Consider entry-level roles in operations, sales, marketing, recruitment or business development. The programme can also support plans for entrepreneurship or further study such as an MBA.',
    benefits: [
      { title: 'See how business functions connect', description: 'Understand how staffing, marketing and finance influence the same organisational decision.' },
      { title: 'Practise making a case', description: 'Use evidence to weigh options and explain a recommendation to others.' },
    ],
    syllabi: [{ label: 'BBA Regular syllabus (PDF)', href: `${syllabus}/UG_Syllabus/commerce/BBA_Regular_V_&_VI_Sem.pdf` }],
  },
  bca: {
    level: 'undergraduate',
    summary: 'Programming, databases, web applications and software development.',
    introduction: 'BCA is an undergraduate programme for students who want to understand how software is designed and built. It connects programming and data fundamentals to the development of applications people can use.',
    overview: 'Students study algorithms, operating systems, databases and networks alongside programming and software engineering. The syllabus pairs theory with lab work and includes a project that brings development skills together.',
    learning: [
      { title: 'Programming and data structures', description: 'Write and debug programs in C, Java and Python, and study how data structures and algorithms solve problems.' },
      { title: 'Databases and SQL', description: 'Design relational tables, organise data and write queries to retrieve or update it.' },
      { title: 'Web and software development', description: 'Study web programming, software requirements, design and testing.' },
      { title: 'Systems and networks', description: 'Examine operating system concepts and how computers communicate across networks.' },
    ],
    skills: ['Writing, testing and debugging code', 'Designing databases and querying structured data', 'Breaking a software problem into requirements and tasks'],
    careers: 'Explore junior roles in software or web development, software testing, application support and IT operations. Further study can include an MCA or a related computing programme, subject to its admission requirements.',
    benefits: [
      { title: 'Connect theory with code', description: 'Use lab work to see how an algorithm, database design or web feature behaves in practice.' },
      { title: 'Understand the full application', description: 'Learn how the interface, application logic and stored data work together.' },
    ],
    syllabi: [
      { label: 'BCA Semesters I–II (PDF)', href: `${syllabus}/ug_sep/I_and_II_Sem_SEP_Syllabus/Science%20Faculty/BCA.pdf` },
      { label: 'BCA Semesters III–IV (PDF)', href: `${syllabus}/ug_sep/III_and_IV_Sem_SEP_Syllabus/Science%20Faculty/BCA%20UG%20SEP%20-%20III%20&%20IV%20Sem.pdf` },
      { label: 'BCA Semesters V–VI (PDF)', href: `${syllabus}/UG_Syllabus/bca/BCA-General-V-and-VI-Sem.pdf` },
    ],
  },
  mcom: {
    level: 'postgraduate',
    summary: 'Advanced commerce, financial analysis and business research.',
    introduction: 'M.Com builds on prior study in commerce and related fields. It develops the analytical and research skills needed to examine financial information and evaluate decisions in more complex business settings.',
    overview: 'Students examine commerce at an advanced level through accounting, finance, business strategy and research methodology. The university curriculum uses case analysis and research work to connect theory with evidence-based decisions.',
    learning: [
      { title: 'Advanced accounting and reporting', description: 'Interpret corporate reporting and examine the role of cost information in assessing performance.' },
      { title: 'Finance and business strategy', description: 'Evaluate financial information in the context of business decisions and strategic priorities.' },
      { title: 'Corporate taxation', description: 'Explore the principles behind corporate tax planning in the relevant university papers.' },
      { title: 'Business research methods', description: 'Frame a research question, choose a study design, analyse evidence and report findings.' },
    ],
    skills: ['Interpreting financial reports and evaluating business performance', 'Designing a study and analysing its evidence', 'Writing and presenting an evidence-based recommendation'],
    careers: 'Potential pathways include financial analysis, accounting, banking, tax and business research. Students interested in teaching or academic research can pursue the relevant qualifying examinations or further research degrees.',
    benefits: [
      { title: 'Go deeper into commerce', description: 'Move from preparing financial information to evaluating what it means for an organisation.' },
      { title: 'Develop research judgement', description: 'Learn to ask focused questions, select credible evidence and explain the limits of your conclusions.' },
    ],
    syllabi: [
      { label: 'M.Com General Semester I (PDF)', href: `${syllabus}/pg_syllabus/Commerce%20and%20Management%20Faculty/M.Com%20%5B%20General%5D%20Syllabus%20-%20I%20Sem.pdf` },
      { label: 'M.Com General Semester II (PDF)', href: `${syllabus}/pg_syllabus/Commerce%20and%20Management%20Faculty/M.ComGeneralSyllabus%20-II%20Sem.pdf` },
      { label: 'M.Com General Semesters III–IV (PDF)', href: `${syllabus}/pg_syllabus/V_VI_sem_sep26_27/M.Com_General_III_IV_Sem.pdf` },
    ],
  },
};
