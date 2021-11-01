<template>
  <v-row justify="center">
    <h2 class="display-2 font-weight-bold mb-3 blue--text">
      Frequently Asked Questions
    </h2>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="({ answer, question }, i) of questions"
        :key="i"
      >
        <v-expansion-panel-header v-text="question"></v-expansion-panel-header>
        <v-expansion-panel-content v-html="answer" class="text-wrap">
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<style scoped>
* {
  padding: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "What type of Conferences does FBLA hold?",
          answer:
            "There are many different level conferences: local, state, national, and international. The students can receive opportunities to win accolades, scholarships, and prizes. FBLA is an organization with over 100,000 members internationally, so all conferences held by it are extremely prestigious.",
        },
        {
          question: "When and where are club meetings?",
          answer:
            "While there is no set time for club meetings, once we have set members, we will take a vote to see what time works best. Depending on conference timelines, they will be held either once a week or once every other week. <br/> <br/> MENTOR SESSIONS <br/> We will separate groups during club meetings into mentor sessions. These individual sessions will allow students to receive more individualized help and feedback. <br/> <br/> FEEDBACK SESSIONS <br/> Before a conference, a student can present their project/presentation/plan to a mentor or officer and can receive last minute feedback before attending. <br/> <br/> MOCK CONFERENCES <br/> In order to prepare students for conferences (especially first timers), we hold mock conferences within the club. This helps them learn the etiquette and general process for conferences.",
        },
        {
          question: "What are the benefits of joining FBLA?",
          answer:
            "Benefits include increased exposure to different career options, growing competitive experience, building confidence and presentative ability, and finally, adding a stand-out extracurricular on your college application! ",
        },
        {
          question: "How is FBLA different from DECA?",
          answer:
            "There are a couple reasons why FBLA is different from and even complementary to the already-existing club of DECA. Firstly, FBLA has 9 different categories, with business/marketing being only one of them. It focuses on many other areas such as computer science, political science, journalism, etc. DECA on the other hand focuses more on the business aspect. Secondly, within the business category, FBLA combines business with other fields such as technology and medicine to cater more towards students who want a dual degree. DECA, on the other hand, is more strictly business and marketing-oriented. Thirdly, FBLA is more oriented to real-life simulations, while DECA is more theory-based. Lastly, the two are complementary because if a student is interested in business for example, they can compete in both FBLA and DECA conferences to increase their experience. Conference timelines don’t overlap, so FBLA conducts local conferences in the September to December timeframe, and begins qualifiers for states, nationals, and international championships in May to July. DECA, on the other hand, ramps up its conferences in the January to May timeframe, with nationals taking place in may. ",
        },
        {
          question: "What are the prerequisites of joining the club?",
          answer:
            "The club is free to anyone who wants to join! Members have access to attending club meetings, feedback sessions, mock conferences, and any other school-related meeting. However, members looking to compete in FBLA conferences must fulfill the Career Technical Education (CTE) requirement by taking a course approved by the CTE department. To fulfill this requirement, students must take either a course in school (Marketing I, Engineering Design) or a course at a community college that is CTE approved. Feel free to reach out to us on any questions about this requirement! ",
        },
        {
          question: "What is the club time commitment?",
          answer:
            "Time commitment varies on a student-to-student basis. For students looking to excel in their conference events, time commitment would be more compared to a student who is not as high-achieving. General time commitment will be around 2-3 hours per week for club meetings (including mentor and feedback sessions) and 2-3 hours of individual work on the conference event. ",
        },
        {
          question: "What is the conference timeline?",
          answer:
            "Unfortunately, the conference timeline for the 2021-2022 school year hasn’t been released by the international organization. However, here is the conference timeline for the 2020-2021 school year (keep in mind that some events were canceled due to the Covid-19 pandemic)",
        },
        {
          question: "What are the FBLA conference categories?",
          answer:
            "Listed below are the general conference categories. To find an in-depth explanation of each category, click here. <br/> <br/> FINANCES: <br/> Accounting I, Accounting II, Project Banking & Financial Systems, Business Financial Plan, Business Law, Website Design, Virtual Business Finance Challenge, Introduction to Financial Math, Personal Finance <br/> <br/> BUSINESS: <br/> Introduction to Business Communication, Introduction to Business Presentation, Introduction to Business Procedures, Advertising, Agribusiness, American Enterprise, Insurance & Risk Management, International Business, Introduction to Business, Introduction to Event Planning, Business Calculations, Business Communications, Business Ethics, Business Plan,  Social Media Strategies, Sales Presentation, Securities & Investments, Management Spreadsheet Applications, Supply Chain Management, Virtual Business Management Challenge, Word Processing, Local Chapter Annual Business, Report, Management Decision, Making Management Information, Systems, Marketing, Introduction to Social Media Strategy, Help Desk, Hospitality & Event Management, Partnership with Business Project,  Client Service, Entrepreneurship, Future Business Leader <br/> <br/> COMPUTER SCIENCE: <br/> Animation, Coding & Programming, Computer Applications, Computer Game & Simulation Programming, Computer Problem Solving, Cyber Security, Database Design & Application, Digital Video Production, Introduction to Information Technology, Mobile Application Development, Network Design, Networking Infrastructures <br/> <br/> ECONOMICS: <br/> E-business, Economics <br/> <br/> REAL LIFE SKILLS <br/> Introduction to Public Speaking, Impromptu Speaking, LifeSmarts, Job Interview, Public Speaking, Electronic Career Portfolio <br/> <br/> POLITICS: <br/> Introduction to Parliamentary Procedure, Organizational Leadership Parliamentary Procedure, Political Science <br/> <br/> COMMUNITY SERVICE: <br/> Community Service Project, Public Service Announcement <br/> <br/> OTHER: <br/> Broadcast Journalism, Graphic Design, Health Care Administration, Introduction to FBLA, Journalism, Publication Design, Sports & Entertainment",
        },
      ],
    };
  },
};
</script>