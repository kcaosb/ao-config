window.quizConfig = {
  version: "2026-06-11",
  startId: "qA2_reasons_submitter",
  modals: {
    concernedPartyInfo: {
      titleHtml: "<strong>What is a Concerned Party?</strong>",
      bodyHtml:
        "A <span class='u-bold'>“Concerned Party,” often</span> a co-parent, guardian, or attorney, is <span class='u-bold'>someone who helps play a supportive role</span> in the child’s wellbeing.",
      items: [
        {
          img: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69dd75d9e724d5149dfe7fa4_cp-2.avif",
            alt: "Co-parent",
          },
          labelHtml: "Co-parent",
        },
        {
          img: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69dd75d9415ffa7178741b99_cp-1.avif",
            alt: "Guardian",
          },
          labelHtml: "Guardian",
        },
        {
          img: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69dd75d9b525cb2e87077014_cp-3.avif",
            alt: "Attorney",
          },
          labelHtml: "Attorney",
        },
      ],
    },
    contactInfo: {
      titleHtml: "<strong>What is a Contact?</strong>",
      bodyHtml:
        "A “Contact” is a person who will receive the results. This is typically a family member, friend, or treatment professional.",
    },
    emailResults: {
      titleHtml: "<strong>Email me my results</strong>",
      kind: "emailForm",
    },
  },
  nodes: {
    qA2_reasons_submitter: {
      id: "qA2_reasons_submitter",
      type: "multiChoice",
      text: "Select <span class='u-bold' style='color: #00abdf;'>all</span> the reason(s) you need monitoring. You can select multiple.",
      options: [
        {
          value: "childCustody",
          labelHtml: "Child Custody (Family Law)",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f105e3b251bf554a158_child%20custody.png",
            alt: "Child custody",
          },
        },
        {
          value: "marriageRelationship",
          labelHtml: "Marriage/Relationship",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10e36776c1e40d98f8_marriage%20relationships.png",
            alt: "Relationship",
          },
        },
        {
          value: "employment",
          labelHtml: "Employment",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f12c0c3add2adbd0a08_work.png",
            alt: "Employment",
          },
        },
        {
          value: "voluntaryAccountability",
          labelHtml: "Voluntary/Accountability",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69f8f8e2b32a01c4581c6a45_icon-volunteer-1.avif",
            alt: "Voluntary",
          },
        },
        {
          value: "other",
          labelHtml: "Other",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69fa62f67e70f42de93f514e_other_icon_30px_antialiased.png",
            alt: "Other",
          },
        },
      ],
      rules: [
        {
          whenIncludesAnyOf: ["childCustody"],
          nextId: "qA3_custody_context",
        },
        {
          whenIncludesAnyOf: [
            "employment",
            "marriageRelationship",
            "voluntaryAccountability",
            "other",
          ],
          nextId: "qA3_share_contacts_submitter",
        },
      ],
    },
    qA3_custody_context: {
      id: "qA3_custody_context",
      type: "singleChoice",
      text: "We’ll tailor a plan that best fits your needs. Which option feels most like your situation?",
      options: [
        {
          value: "proactiveFalselyAccused",
          labelHtml: "I am being falsely accused or preparing for a case.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f1061c8412f197bf530_Accused.png",
            alt: "thumbs down",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
        {
          value: "proveSoberParentingTime",
          labelHtml: "I need to prove I am sober during parenting time.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f127fc27e2065acf64e_Sober%20PT.png",
            alt: "person and check icons",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
        {
          value: "fullAbstinenceKeepKids",
          labelHtml: "I need to prove that I am sober every day.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106ab22d06aa2f7922_Abstinence.png",
            alt: "stop sign",
          },
          nextId: "qA5L2_intro_submitter",
        },
      ],
    },
    qA4_testingFrequency_submitter: {
      id: "qA4_testingFrequency_submitter",
      type: "singleChoice",
      text: "Which option sounds most like you?",
      size: "lg",
      options: [
        {
          value: "everyDay",
          labelHtml:
            "<span class='u-normal'>I am willing or required to</span> test every day.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10cf15960ad2f62cb4_daily%20testing.avif",
            alt: "calendar with all days highlighted icon",
          },
          badge: {
            label: "EXPERTS SUGGEST TESTING EVERY DAY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          nextId: "qA5L2_intro_submitter",
        },
        {
          value: "parentingDaysOnly",
          labelHtml:
            "<span class='u-normal'>I</span> only <span class='u-normal'>need to</span> test on parenting days.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
            alt: "calendar icon with only several days highlighted",
          },
          nextId: "qA5L1_intro_submitter",
        },
      ],
    },
    qA5L2_intro_submitter: {
      id: "qA5L2_intro_submitter",
      type: "info",
      headlineHtml:
        "<span style='font-size: 16px;'>We suggest our</span><br/><span style='color: #00abdf;'>Level 2 - Daily Testing Program</span>",
      textHtml:
        "<span style='font-size: 16px;'>Consistent monitoring, 7 days a week. Testing schedules managed by Soberlink.</span>",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8913be2c8175724ce3d4f_Level-1-Photo%201.avif",
      primaryCta: {
        label: "Next",
        nextId: "qA6L2_shareScope_submitter",
      },
    },
    qA6L2_shareScope_submitter: {
      id: "qA6L2_shareScope_submitter",
      type: "singleChoice",
      introText:
        "To keep everyone informed, your results must be shared with a “Concerned Party”.",
      infoIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a9fcbcf5cd846f8b7e504b_icon%20info.png",
        alt: "Info icon",
        text: "What is a Concerned Party?",
      },
      infoLink: {
        type: "lightbox",
        id: "concernedPartyInfo",
        labelHtml: "Concerned Party info",
      },
      options: [
        {
          value: "concernedOnly",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party only.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd4bad2f8d698ab385_One%20Person.png",
            alt: "one person",
          },
          nextId: "qA7L2_notify_concernedOnly_submitter",
        },
        {
          value: "concernedAndOthers",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party and <span class='u-normal'>other</span> contacts.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd9b14c609f0ac6f6f_Two%20People%20%2B.png",
            alt: "two people",
          },
          nextId: "qA7L2_notify_manyContacts_submitter",
        },
      ],
    },
    qA7L2_notify_concernedOnly_submitter: {
      id: "qA7L2_notify_concernedOnly_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "xlg",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "basic",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "Email",
          },
          nextId: "res_plan_level2_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed in real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "plus",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "Email",
          },
          nextId: "res_plan_level2_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed and texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "INCLUDES 50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "email and phone",
          },
          nextId: "res_plan_level2_premium",
        },
      ],
    },
    qA7L2_notify_manyContacts_submitter: {
      id: "qA7L2_notify_manyContacts_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "xlg",
      options: [
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed in real-time.",
          metaHtml:
            "<span class='u-bold' style='color: #00ABDF;'>Plus Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "plus",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "email",
          },
          nextId: "res_plan_level2_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed and texted in real-time.",
          metaHtml:
            "<span class='u-bold' style='color: #1C4A82'>Premium Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "INCLUDES 50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "email and phone",
          },
          nextId: "res_plan_level2_premium",
        },
      ],
    },
    qA5L1_intro_submitter: {
      id: "qA5L1_intro_submitter",
      type: "info",
      headlineHtml:
        "<span style='font-size: 16px;'>We suggest our</span><br/> <span style='color: #00abdf;'>Level 1 - Parenting Time Only Program</span>",
      textHtml:
        "<span style='font-size: 16px;'>This plan allows you to test only on days that you need to show proof of sobriety.</span>",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8913be2c8175724ce3d4f_Level-1-Photo%201.avif",
      primaryCta: {
        label: "Next",
        nextId: "qA6L1_testingDays_submitter",
      },
    },
    qA6L1_testingDays_submitter: {
      id: "qA6L1_testingDays_submitter",
      type: "singleChoice",
      text: "Our Level 1 Program includes 20 days of testing each month.",
      options: [
        {
          value: "twentyEnough",
          labelHtml:
            "20 testing days per month is enough. <span class='u-normal'>Extra days at $15 each.</span>",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8be108f33f4d708defb0b_Icon-Calendar-20-Days.avif",
            alt: "calendar icon",
          },
          nextId: "qA7L1_shareScope_submitter",
        },
        {
          value: "needMoreThanTwenty",
          labelHtml: "I need more than 20 testing days a month.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8be1088cb4c64a242b2bd_Icon-Calendar-20-Plus-Days.avif",
            alt: "calendar icon",
          },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA7L1_shareScope_submitter: {
      id: "qA7L1_shareScope_submitter",
      type: "singleChoice",
      introText:
        "To keep everyone informed, your results must be shared with a “Concerned Party.”",
      infoIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a9fcbcf5cd846f8b7e504b_icon%20info.png",
        alt: "More info",
        text: "What is a Concerned Party?",
      },
      infoLink: {
        type: "lightbox",
        id: "concernedPartyInfo",
        labelHtml: "Concerned Party info",
      },
      options: [
        {
          value: "concernedOnly",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party only.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd4bad2f8d698ab385_One%20Person.png",
            alt: "one person",
          },
          nextId: "qA8L1_notify_concernedOnly_submitter",
        },
        {
          value: "concernedAndOthers",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party and <span class='u-normal'>other</span> contacts.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd9b14c609f0ac6f6f_Two%20People%20%2B.png",
            alt: "two people",
          },
          nextId: "qA8L1_notify_manyContacts_submitter",
        },
      ],
    },
    qA8L1_notify_concernedOnly_submitter: {
      id: "qA8L1_notify_concernedOnly_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "xlg",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "basic",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "Email",
          },
          nextId: "res_plan_level1_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed in real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "plus",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "email",
          },
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed and texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "UNLIMITED TESTING DAYS",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "email and phone",
          },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA8L1_notify_manyContacts_submitter: {
      id: "qA8L1_notify_manyContacts_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      size: "xlg",
      choiceLayout: "planCards",
      options: [
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>I want the test results</span> emailed in real time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "plus",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "Email",
          },
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>I want the test results</span> emailed and texted in real time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "premium",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "email and phone",
          },
          badge: {
            label: "UNLIMITED TESTING DAYS",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA3_share_contacts_submitter: {
      id: "qA3_share_contacts_submitter",
      type: "singleChoice",
      textHtml:
        "Let us help you prove your sobriety. Who would you like to share your results with?",
      infoIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a9fcbcf5cd846f8b7e504b_icon%20info.png",
        alt: "Info icon",
        text: "What is a Contact?",
      },
      infoLink: {
        type: "lightbox",
        id: "contactInfo",
        labelHtml: "Contact info",
      },
      options: [
        {
          value: "oneContact",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'> with</span> one contact.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd4bad2f8d698ab385_One%20Person.png",
            alt: "one person",
          },
          nextId: "qA4_share_notify_oneContact_submitter",
        },
        {
          value: "moreThanOneContact",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with</span> more than one Contact.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd9b14c609f0ac6f6f_Two%20People%20%2B.png",
            alt: "two people",
          },
          nextId: "qA4_share_notify_manyContacts_submitter",
        },
      ],
    },
    qA4_share_notify_oneContact_submitter: {
      id: "qA4_share_notify_oneContact_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      size: "xlg",
      choiceLayout: "planCards",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "basic",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "email",
          },
          nextId: "res_plan_share_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed in real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "plus",
            cadence: "mo",
          },
          badge: {
            label: "MOST POPULAR",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "email",
          },
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed and texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div> ",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "premium",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "email and phone",
          },
          nextId: "res_plan_share_premium",
        },
      ],
    },
    qA4_share_notify_manyContacts_submitter: {
      id: "qA4_share_notify_manyContacts_submitter",
      type: "singleChoice",
      size: "xlg",
      choiceLayout: "planCards",
      text: "How would you like your progress recognized?",
      options: [
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed in real-time.",
          metaHtml:
            "<div class='u-bold' style='color: #00abdf;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "plus",
            cadence: "mo",
          },
          badge: {
            label: "MOST POPULAR",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a022738d52755adb3bba618_icon-email-alert.avif",
            alt: "Email",
          },
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My test results will be</span> emailed and texted in real-time.",
          metaHtml:
            "<div class='u-bold' style='color: #1C4A82;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "premium",
            cadence: "mo",
          },
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6a02273806f904e006eb6249_icon-email-text-alert.avif",
            alt: "Email and phone",
          },
          nextId: "res_plan_share_premium",
        },
      ],
    },
  },
  planFooters: {
    submitter: {
      textHtml:
        '\n        <div style="text-align: center; font-size: 24px;">\n          Next, let\'s get your agreement started.\n        </div>\n      ',
      ctaLabel: "Continue",
    },
  },
  results: {
    res_plan_level2_basic: {
      id: "res_plan_level2_basic",
      type: "plan",
      programKey: "level_2",
      planKey: "basic",
      programDisplay: "Level 2 Daily Testing",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Basic",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/5f88919e0edbe064d62be70d_FL-Resources-5-Level2%20copy.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10cf15960ad2f62cb4_daily%20testing.avif",
        alt: "Level 2",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c60995dc1a8007b27e9a6_Icon-Plan-Basic.avif",
        alt: "Basic",
      },
      priceRef: {
        kind: "plan",
        program: "level_2",
        tier: "basic",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_level2_plus: {
      id: "res_plan_level2_plus",
      type: "plan",
      programKey: "level_2",
      planKey: "plus",
      programDisplay: "Level 2 Daily Testing",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Plus",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/5f88919e0edbe064d62be70d_FL-Resources-5-Level2%20copy.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10cf15960ad2f62cb4_daily%20testing.avif",
        alt: "Level 2",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6849d98a1658cd2a8a322523_2084acb108cdee46636c09513576294ea46cbf9c.avif",
        alt: "Plus",
      },
      priceRef: {
        kind: "plan",
        program: "level_2",
        tier: "plus",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_level2_premium: {
      id: "res_plan_level2_premium",
      type: "plan",
      programKey: "level_2",
      planKey: "premium",
      programDisplay: "Level 2 Daily Testing",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Premium",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/5f88919e0edbe064d62be70d_FL-Resources-5-Level2%20copy.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10cf15960ad2f62cb4_daily%20testing.avif",
        alt: "Level 2",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c6099560a81fb3eccf802_Icon-Plan-Premium.avif",
        alt: "Premium",
      },
      priceRef: {
        kind: "plan",
        program: "level_2",
        tier: "premium",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_level1_basic: {
      id: "res_plan_level1_basic",
      type: "plan",
      programKey: "level_1",
      planKey: "basic",
      programDisplay: "Level 1 Parenting Time Only",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Basic",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8913be2c8175724ce3d4f_Level-1-Photo%201.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
        alt: "Level 1",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c60995dc1a8007b27e9a6_Icon-Plan-Basic.avif",
        alt: "Basic",
      },
      priceRef: {
        kind: "plan",
        program: "level_1",
        tier: "basic",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_level1_plus: {
      id: "res_plan_level1_plus",
      type: "plan",
      programKey: "level_1",
      planKey: "plus",
      programDisplay: "Level 1 Parenting Time Only",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Plus",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8913be2c8175724ce3d4f_Level-1-Photo%201.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
        alt: "Level 1",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6849d98a1658cd2a8a322523_2084acb108cdee46636c09513576294ea46cbf9c.avif",
        alt: "Plus",
      },
      priceRef: {
        kind: "plan",
        program: "level_1",
        tier: "plus",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_level1_premium: {
      id: "res_plan_level1_premium",
      type: "plan",
      programKey: "level_1",
      planKey: "premium",
      programDisplay: "Level 1 Parenting Time Only",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Premium",
      textHtml: "This plan has unlimited testing days.",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8913be2c8175724ce3d4f_Level-1-Photo%201.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
        alt: "Level 1",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c6099560a81fb3eccf802_Icon-Plan-Premium.avif",
        alt: "Premium",
      },
      priceRef: {
        kind: "plan",
        program: "level_1",
        tier: "premium",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_share_basic: {
      id: "res_plan_share_basic",
      type: "plan",
      programKey: "share",
      planKey: "basic",
      programDisplay: "Share Program",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Basic",
      textHtml: "",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8be1104143954697ecea4_Share.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/688aa70a4aa70c72401a1784_e52682597e69004a549b6d3dfc6173aa993dd71c.avif",
        alt: "Share",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c60995dc1a8007b27e9a6_Icon-Plan-Basic.avif",
        alt: "Basic",
      },
      priceRef: {
        kind: "plan",
        program: "share",
        tier: "basic",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_share_plus: {
      id: "res_plan_share_plus",
      type: "plan",
      programKey: "share",
      planKey: "plus",
      programDisplay: "Share Program",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Plus",
      textHtml: "",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8be1104143954697ecea4_Share.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/688aa70a4aa70c72401a1784_e52682597e69004a549b6d3dfc6173aa993dd71c.avif",
        alt: "Share",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6849d98a1658cd2a8a322523_2084acb108cdee46636c09513576294ea46cbf9c.avif",
        alt: "Plus",
      },
      priceRef: {
        kind: "plan",
        program: "share",
        tier: "plus",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_plan_share_premium: {
      id: "res_plan_share_premium",
      type: "plan",
      programKey: "share",
      planKey: "premium",
      programDisplay: "Share Program",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Premium",
      textHtml: "",
      imageUrl:
        "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69a8be1104143954697ecea4_Share.avif",
      programIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/688aa70a4aa70c72401a1784_e52682597e69004a549b6d3dfc6173aa993dd71c.avif",
        alt: "Share",
      },
      planIcon: {
        url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/684c6099560a81fb3eccf802_Icon-Plan-Premium.avif",
        alt: "Premium",
      },
      priceRef: {
        kind: "plan",
        program: "share",
        tier: "premium",
        cadence: "mo",
      },
      nextId: "res_final_agreement",
    },
    res_final_agreement: {
      id: "res_final_agreement",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      nextId: null,
    },
  },
};
