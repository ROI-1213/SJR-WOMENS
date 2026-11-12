import {
  BookOpen, Camera, ClipboardList, Clapperboard, Dumbbell, FileCheck, Flag, GraduationCap,
  HandHeart, HeartPulse, Leaf, ListChecks, Megaphone, MessageCircle, Mic,
  NotebookPen, Scale, Search, Shield, ShieldAlert, ShieldCheck, Target, Users, UserRoundCheck,
  type LucideIcon,
} from 'lucide-react';
import type { StudentServicesPageKey } from './navigation/studentServicesMenuData';

interface StudentServicesContent {
  heading: string;
  introduction: string;
  imageAlt: string;
  highlightsHeading: string;
  highlights: { icon: LucideIcon; title: string; text: string }[];
  guideHeading: string;
  guide: string;
  steps: { title: string; text: string }[];
  enquiry: string;
  related: StudentServicesPageKey[];
  resource?: { label: string; href: string };
}

export const studentServicesContent: Record<StudentServicesPageKey, StudentServicesContent> = {
  support: {
    heading: 'Find the right person to ask',
    introduction: 'College is easier to navigate when you know where to start. Use this guide to describe what you need, identify the right person to speak with and prepare for a useful conversation.',
    imageAlt: 'Illustration of a student reviewing a notebook with an adviser',
    highlightsHeading: 'Choose the right kind of support',
    highlights: [
      { icon: BookOpen, title: 'Coursework and study', text: 'Bring an assignment brief, feedback or timetable when you need help with a subject or workload. A specific example makes it easier to discuss what is getting in your way.' },
      { icon: GraduationCap, title: 'College administration', text: 'For questions about records, fees or documentation, note your programme, semester and the date by which you need an answer.' },
      { icon: HandHeart, title: 'Personal circumstances', text: 'If a personal matter is affecting your studies, ask to speak privately. Share only the information needed to explain the support you are seeking.' },
    ],
    guideHeading: 'Prepare for a support conversation',
    guide: 'Start with the most immediate issue. A short written summary can help you explain it clearly.',
    steps: [
      { title: 'Describe the issue', text: 'Write down what happened and how it is affecting your time at college.' },
      { title: 'Identify the next decision', text: 'Decide whether you need information, a referral or a conversation with your department.' },
      { title: 'Agree on a follow-up', text: 'Note who will respond and when you should check back.' },
    ],
    enquiry: 'Ask who handles your question about coursework, records or student support.',
    related: ['council', 'scst', 'antiRagging'],
  },
  clubs: {
    heading: 'Make time for an interest outside class',
    introduction: 'A student club gives you a reason to meet people beyond your programme and make something together. Start with an activity you would enjoy trying, even if you have little experience.',
    imageAlt: 'Illustration of students planning a club activity at a shared table',
    highlightsHeading: 'Explore by interest',
    highlights: [
      { icon: Clapperboard, title: 'Storytelling and the arts', text: 'Discuss a film, try a reading session or volunteer behind the scenes. Creative groups make room for writing, production and event support as well as performance.' },
      { icon: Dumbbell, title: 'Movement and wellbeing', text: 'Ask about beginner-friendly sports practice or a health-awareness activity you can fit into your week.' },
      { icon: HandHeart, title: 'Service and representation', text: 'Community projects and student representation suit people who enjoy listening, organising and following through on a shared responsibility.' },
    ],
    guideHeading: 'Try a club before you commit',
    guide: 'A single meeting can tell you how a club works and what a new member can contribute.',
    steps: [
      { title: 'Pick one activity', text: 'Choose a subject that interests you and check when the group next meets.' },
      { title: 'Take a small role', text: 'Offer to help with a discussion, practice session or one part of a project.' },
      { title: 'Decide what fits', text: 'Check how the commitment fits your timetable before taking on a regular role.' },
    ],
    enquiry: 'Ask about club contacts, upcoming meetings or opportunities for first-time participants.',
    related: ['film', 'literary', 'sports', 'health'],
  },
  nss: {
    heading: 'Learn through community service',
    introduction: 'The National Service Scheme (NSS) brings students and communities together through voluntary work. A useful project begins with listening to the people it serves and deciding with them what a student team can contribute.',
    imageAlt: 'Illustration of college volunteers planting a sapling together',
    highlightsHeading: 'What goes into a service project',
    highlights: [
      { icon: MessageCircle, title: 'Listen before planning', text: 'Speak with local partners to understand the need, what is already being done and where volunteers can help.' },
      { icon: Leaf, title: 'Choose work you can sustain', text: 'For an activity such as caring for a shared garden, agree who will maintain the work once the first session ends.' },
      { icon: ClipboardList, title: 'Record what changed', text: 'Keep a short record of tasks completed, feedback received and improvements for the next volunteer group.' },
    ],
    guideHeading: 'Get ready to volunteer',
    guide: 'Before attending, confirm what the team has agreed to do and what your role will be.',
    steps: [
      { title: 'Check the activity', text: 'Ask the college about registration, the meeting place and the time commitment.' },
      { title: 'Prepare with your team', text: 'Agree on responsibilities, equipment and any instructions from the community partner.' },
      { title: 'Follow through', text: 'Share what you learned and follow up on tasks that still need attention.' },
    ],
    enquiry: 'Ask about volunteer registration, activity dates and what to bring to your first session.',
    related: ['clubs', 'council'],
    resource: { label: 'National Service Scheme programme information', href: 'https://yas.gov.in/youth/about/our-organizations/nss' },
  },
  ncc: {
    heading: 'Develop discipline through cadet training',
    introduction: 'The National Cadet Corps (NCC) brings students together to practise teamwork, responsibility and leadership. Cadets learn to prepare for a session, follow instructions and work toward a common goal.',
    imageAlt: 'Illustration of college cadets practising an unarmed drill on a field',
    highlightsHeading: 'What cadet training develops',
    highlights: [
      { icon: Flag, title: 'Coordination and attention', text: 'Drill practice develops timing and attention to detail as cadets repeat a sequence together and respond to feedback.' },
      { icon: Users, title: 'Responsibility within a team', text: 'Cadets practise clear communication, prepare their assigned tasks and support the people working alongside them.' },
      { icon: ShieldCheck, title: 'Preparedness and service', text: 'Training and service activities give cadets opportunities to practise personal responsibility in unfamiliar settings.' },
    ],
    guideHeading: 'Before applying to join',
    guide: 'Ask about intake early enough to compare training commitments with your class timetable.',
    steps: [
      { title: 'Confirm the intake', text: 'Ask when enrolment opens and what the selection process involves.' },
      { title: 'Check documentation', text: 'Request the current list of documents and any preparation instructions.' },
      { title: 'Plan your attendance', text: 'Check the schedule for practice, training and any camps before committing.' },
    ],
    enquiry: 'Ask for the NCC contact at the college and confirm the enrolment requirements.',
    related: ['nss', 'sports'],
    resource: { label: 'National Cadet Corps Digital Forum', href: 'https://indiancc.mygov.in/' },
  },
  film: {
    heading: 'Learn to read a scene and make one',
    introduction: 'Film brings writing, performance, sound and editing into one project. Explore the choices that shape a scene, then try making a short sequence with the people and equipment you have.',
    imageAlt: 'Illustration of a student film crew setting up a camera in a courtyard',
    highlightsHeading: 'Three ways to explore filmmaking',
    highlights: [
      { icon: Clapperboard, title: 'Screenings with a purpose', text: 'Watch a sequence closely and discuss how framing, pace or sound influences what the audience notices.' },
      { icon: Camera, title: 'Small productions', text: 'Try a short scene with a clear shot list. Rotate roles to see how camera work, sound recording and continuity affect the result.' },
      { icon: MessageCircle, title: 'Editing and feedback', text: 'Show a rough cut to a small group. Ask where the story became unclear and revise the sequence.' },
    ],
    guideHeading: 'Plan a first short film',
    guide: 'A scene with one location and one clear action makes a good first exercise.',
    steps: [
      { title: 'Write the action', text: 'Summarise the scene in two sentences and sketch the shots needed to tell it.' },
      { title: 'Organise the shoot', text: 'Agree who will film and record sound. Confirm permission to use the space and film anyone who appears.' },
      { title: 'Screen and revise', text: 'Share the cut with your group and record one change that would make the story clearer.' },
    ],
    enquiry: 'Ask about film discussions, production groups or how to share a short film idea.',
    related: ['clubs', 'literary'],
  },
  health: {
    heading: 'Build habits that fit a college day',
    introduction: 'Health awareness starts with ordinary choices: taking breaks, making time for movement and knowing where to find reliable information. The Health Club gives students a way to discuss these topics with peers.',
    imageAlt: 'Illustration of students stretching together on a shaded campus lawn',
    highlightsHeading: 'Topics for peer learning',
    highlights: [
      { icon: HeartPulse, title: 'Everyday wellbeing', text: 'Discuss how class schedules, travel and study time affect routines. Share ideas students can adapt to their circumstances.' },
      { icon: Users, title: 'Peer awareness', text: 'Build a short activity around one clear topic. Check information against reliable sources before sharing it.' },
      { icon: Shield, title: 'Knowing when to seek help', text: 'Bring individual medical or mental-health questions to a qualified professional.' },
    ],
    guideHeading: 'Plan a health-awareness activity',
    guide: 'A useful session makes one idea easy to understand and gives students somewhere reliable to learn more.',
    steps: [
      { title: 'Choose a topic', text: 'Ask classmates which everyday health question they would like to understand better.' },
      { title: 'Check the information', text: 'Review the material with a qualified person or consult reputable public health guidance.' },
      { title: 'Make it accessible', text: 'Choose a format that students can participate in comfortably and leave time for questions.' },
    ],
    enquiry: 'Ask about joining a health-awareness discussion or proposing an activity for students.',
    related: ['support', 'sports'],
  },
  sports: {
    heading: 'Find a way to play, practise or compete',
    introduction: 'The Sports Club is a starting point for students who want to be active with others. Whether you are trying a sport for the first time or returning to regular practice, look for a session that fits your experience.',
    imageAlt: 'Illustration of students playing badminton across a net',
    highlightsHeading: 'Ways to take part',
    highlights: [
      { icon: Target, title: 'Learn the basics', text: 'Begin with the rules, equipment and a few repeatable drills. Focus on one skill at a time and ask for feedback.' },
      { icon: Users, title: 'Practise as a team', text: 'Agree on warm-ups, roles and shared equipment. Use practice to get better at communicating during play.' },
      { icon: Flag, title: 'Prepare for a fixture', text: 'When a competition is announced, confirm trial dates, eligibility, reporting times and equipment requirements.' },
    ],
    guideHeading: 'Prepare for your first practice',
    guide: 'Ask how the session is organised so you can arrive equipped and know what to expect.',
    steps: [
      { title: 'Choose a sport', text: 'Tell the organiser whether you are a beginner, a returning player or interested in competing.' },
      { title: 'Confirm the venue', text: 'Check the date, location, footwear requirements and whether equipment is provided.' },
      { title: 'Set one goal', text: 'Pick a skill to practise and note what you want to work on next time.' },
    ],
    enquiry: 'Ask about practice sessions, team trials and equipment requirements.',
    related: ['health', 'clubs'],
  },
  literary: {
    heading: 'Read closely, write often, share your work',
    introduction: 'The Literary Club gives students a space to talk about writing, develop their own work and hear different interpretations. Bring a passage that stayed with you or a draft you are ready to discuss.',
    imageAlt: 'Illustration of a student reading circle with open books and notebooks',
    highlightsHeading: 'Ways to work with words',
    highlights: [
      { icon: BookOpen, title: 'Reading circles', text: 'Choose a short text, mark the lines you want to discuss and bring a question. Another interpretation can change how you read a passage.' },
      { icon: NotebookPen, title: 'Writing and revision', text: 'Work on a poem, essay or story in stages. Ask readers a specific question to get feedback you can use.' },
      { icon: Mic, title: 'Spoken word', text: 'Read a piece aloud to hear its rhythm. Practise where to pause and how to introduce it to an audience.' },
    ],
    guideHeading: 'Bring something to the next discussion',
    guide: 'A short excerpt or unfinished piece is enough to start a conversation.',
    steps: [
      { title: 'Select a piece', text: 'Choose a passage or draft that can be read in a few minutes.' },
      { title: 'Prepare a question', text: 'Ask about one element, such as the opening, a character’s voice or the ending.' },
      { title: 'Take notes and revise', text: 'Write down the feedback that helps and use it to make a specific change.' },
    ],
    enquiry: 'Ask about reading sessions, writing feedback or opportunities to share original work.',
    related: ['film', 'clubs'],
  },
  council: {
    heading: 'Turn student feedback into clear proposals',
    introduction: 'Student representation starts with listening across programmes and year groups. The Student Council provides a way to bring shared concerns forward and explain to classmates what happens next.',
    imageAlt: 'Illustration of student representatives reviewing an agenda together',
    highlightsHeading: 'What good representation involves',
    highlights: [
      { icon: Users, title: 'Listen across groups', text: 'Ask who is affected and whether the experience differs by course, year or timetable. Make room for views missing from the first discussion.' },
      { icon: Megaphone, title: 'Raise a concrete request', text: 'Describe the issue, its impact and the change students want considered. Keep personal cases out of group discussions.' },
      { icon: ListChecks, title: 'Report back', text: 'Tell classmates what was raised, what response was received and which questions remain open.' },
    ],
    guideHeading: 'Prepare an issue for discussion',
    guide: 'Keep the proposal brief enough for someone unfamiliar with the issue to understand it.',
    steps: [
      { title: 'Describe the shared problem', text: 'Use one or two examples and explain who is affected.' },
      { title: 'Suggest a feasible change', text: 'Name a practical option and any trade-offs it would introduce.' },
      { title: 'Agree how to follow up', text: 'Ask when the issue will be reviewed and how students will hear the outcome.' },
    ],
    enquiry: 'Ask how to contact a student representative or raise an issue for discussion.',
    related: ['support', 'clubs'],
  },
  alumni: {
    heading: 'Stay connected after graduation',
    introduction: 'Alumni carry knowledge of different workplaces, further study and career changes. Staying in touch with the college gives graduates a way to share what they have learned and help students think through their next steps.',
    imageAlt: 'Illustration of an alumnus speaking with students in a classroom',
    highlightsHeading: 'How graduates can contribute',
    highlights: [
      { icon: MessageCircle, title: 'Career conversations', text: 'Explain what an early-career role involves, how you entered it and which skills students can practise before graduation.' },
      { icon: HandHeart, title: 'Mentoring and feedback', text: 'Offer a focused conversation, résumé review or practice interview. Agree what the student wants to get out of the session.' },
      { icon: Users, title: 'Keeping in touch', text: 'Share a current professional email and the kinds of activities you would like to hear about or support.' },
    ],
    guideHeading: 'Offer a contribution that fits your time',
    guide: 'A clear offer makes it easier to match your experience with the students who could benefit from it.',
    steps: [
      { title: 'Introduce yourself', text: 'Include your programme, graduation year and current area of work or study.' },
      { title: 'Name a contribution', text: 'Say whether you can give a talk, mentor a student or share an industry perspective.' },
      { title: 'Set a practical scope', text: 'Include your availability and the best way to reach you.' },
    ],
    enquiry: 'Ask how to reconnect with the college or offer to support current students.',
    related: ['placement', 'council'],
  },
  placement: {
    heading: 'Prepare for applications and interviews',
    introduction: 'A well-prepared application shows what you have done and how it relates to a role. Use projects, assignments, internships or responsibilities outside class to build examples you can explain clearly.',
    imageAlt: 'Illustration of a student practising an interview with a reviewer',
    highlightsHeading: 'Build your application materials',
    highlights: [
      { icon: FileCheck, title: 'Résumé', text: 'Lead with relevant education, projects and experience. Describe your contribution in each example and check your dates and contact details.' },
      { icon: Search, title: 'Employer research', text: 'Read the job description, learn what the organisation does and identify which requirements you can demonstrate.' },
      { icon: MessageCircle, title: 'Interview practice', text: 'Practise answers that explain the situation, your role and the outcome. Prepare a question about the work or training.' },
    ],
    guideHeading: 'Before submitting an application',
    guide: 'Eligibility, documents and deadlines can differ by employer and role. Review the details for the opportunity you are applying for.',
    steps: [
      { title: 'Read the notice', text: 'Check the deadline, eligibility, selection stages and required documents.' },
      { title: 'Tailor your evidence', text: 'Choose examples that show skills relevant to the role and update your résumé accordingly.' },
      { title: 'Prepare for the next round', text: 'Keep a copy of what you submitted and practise explaining the examples you included.' },
    ],
    enquiry: 'Ask about placement notices, application preparation or the requirements for a specific opportunity.',
    related: ['alumni', 'support'],
  },
  research: {
    heading: 'Turn a question into a study you can complete',
    introduction: 'A manageable research project begins with a question you can answer using the time, materials and evidence available. Start by reading what others have found and identifying what you want to examine more closely.',
    imageAlt: 'Illustration of students and a mentor examining charts and research notes',
    highlightsHeading: 'Build a sound research plan',
    highlights: [
      { icon: Search, title: 'Refine the question', text: 'Identify the people, place, material or time period you want to study. A narrower question helps you choose appropriate evidence.' },
      { icon: ClipboardList, title: 'Choose a method', text: 'Decide whether literature, a dataset, observations or interviews can address the question. Discuss permissions and consent with a mentor before collecting information.' },
      { icon: NotebookPen, title: 'Keep track of evidence', text: 'Record where information came from, how you collected it and any gaps that limit what you can conclude.' },
    ],
    guideHeading: 'Write a one-page proposal',
    guide: 'Bring a draft to a faculty discussion so you can review the question, method and timescale together.',
    steps: [
      { title: 'Explain the question', text: 'Summarise the topic, the reason for studying it and the question you want to answer.' },
      { title: 'Outline your approach', text: 'Name your sources, explain how you will analyse them and note approvals you may need.' },
      { title: 'Set a realistic schedule', text: 'Allow time for collecting evidence, revising your analysis and writing up the findings.' },
    ],
    enquiry: 'Ask who can review an early proposal or advise on a project in your subject area.',
    related: ['support', 'alumni'],
  },
  scst: {
    heading: 'Get guidance on access and entitlements',
    introduction: 'The SC/ST Cell is a point of reference for students seeking guidance about Scheduled Caste and Scheduled Tribe scholarship enquiries, documentation or barriers to participation.',
    imageAlt: 'Illustration of students discussing paperwork with an adviser in a private office',
    highlightsHeading: 'What to ask about',
    highlights: [
      { icon: FileCheck, title: 'Scholarship documentation', text: 'Confirm which documents a specific scheme asks for, who issues them and what deadline applies.' },
      { icon: UserRoundCheck, title: 'Access to student services', text: 'Describe the service you are trying to use and what has prevented you from accessing it. Ask who can help resolve the issue.' },
      { icon: ShieldCheck, title: 'Sensitive concerns', text: 'Request a private conversation if the issue involves personal information or unequal treatment.' },
    ],
    guideHeading: 'Prepare for a confidential enquiry',
    guide: 'Bring the facts needed to explain your question. Share documents through the channel the college or scheme confirms.',
    steps: [
      { title: 'Name the issue', text: 'Say whether the question concerns a scheme, a document or access to a college service.' },
      { title: 'Identify the relevant notice', text: 'For a scheme enquiry, bring the notice and note any deadline or reference number.' },
      { title: 'Confirm the next step', text: 'Ask which office is responsible and how to submit any required information.' },
    ],
    enquiry: 'Ask who handles SC/ST Cell enquiries and how to arrange a private conversation.',
    related: ['support', 'council'],
  },
  disciplinary: {
    heading: 'Understand expectations for student conduct',
    introduction: 'A fair response to a conduct concern starts with a clear account of what happened and an opportunity for the people involved to be heard. This guide helps students prepare for a conversation about conduct or a notice they have received.',
    imageAlt: 'Illustration of a meeting room with a document folder and pen on the table',
    highlightsHeading: 'What matters in a conduct enquiry',
    highlights: [
      { icon: Scale, title: 'A factual account', text: 'Separate what you experienced from what you heard from others. Dates, locations and relevant messages can clarify the sequence.' },
      { icon: MessageCircle, title: 'A chance to respond', text: 'If you receive a notice, read it carefully and ask how to provide your account or raise questions about the process.' },
      { icon: Shield, title: 'Respect for privacy', text: 'Share relevant information through the appropriate college channel and keep personal details out of group chats or public posts.' },
    ],
    guideHeading: 'Prepare before a meeting',
    guide: 'Bring the notice, if there is one, and write down the questions you need answered.',
    steps: [
      { title: 'Review the details', text: 'Check the meeting time, location, purpose and any deadline for submitting information.' },
      { title: 'Organise your account', text: 'Put relevant events in order and note any documents or messages that support your account.' },
      { title: 'Ask what happens next', text: 'Confirm when to expect an update and which office can answer a follow-up question.' },
    ],
    enquiry: 'Ask who handles conduct enquiries or how to respond to a notice.',
    related: ['antiRagging', 'support'],
  },
  antiRagging: {
    heading: 'Recognise ragging and know how to report it',
    introduction: 'Coercion, threats, forced activities and humiliating treatment can harm students in person or online. If you experience or witness ragging, reach out for help as soon as you can do so safely.',
    imageAlt: 'Illustration of two students walking toward a campus support office',
    highlightsHeading: 'Recognise what to report',
    highlights: [
      { icon: ShieldAlert, title: 'Coercion or intimidation', text: 'Report threats, pressure to take part in unwanted activities, forced tasks or treatment that makes a student feel unsafe.' },
      { icon: MessageCircle, title: 'Online behaviour', text: 'A group chat or message can be used to threaten or humiliate someone. Keep relevant records if you can do so safely.' },
      { icon: HandHeart, title: 'Support for witnesses', text: 'If a classmate tells you what happened, listen and help them reach a trusted staff member or an official reporting channel.' },
    ],
    guideHeading: 'Report a concern safely',
    guide: 'If there is immediate danger, move to a safe place and seek emergency assistance. Use the national reporting portal for an official ragging complaint.',
    steps: [
      { title: 'Find support', text: 'Tell a trusted faculty member or another responsible person who can help you reach a safe place.' },
      { title: 'Record the essentials', text: 'If it is safe, note what happened, when and where, and keep relevant messages or screenshots.' },
      { title: 'Use a reporting channel', text: 'Submit your concern through the official portal or speak with the college about reporting it. Keep the acknowledgement if you receive one.' },
    ],
    enquiry: 'For general information about prevention, use the college contact page. To report ragging, use the official portal above.',
    related: ['support', 'disciplinary'],
    resource: { label: 'File a report on the National Anti-Ragging Portal', href: 'https://www.antiragging.in/complaint_register_form.html' },
  },
};
