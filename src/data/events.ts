import { TimeEventWithLinks, TimeEvent } from "../utils/events";

export const virtualFair = new TimeEventWithLinks({
  year: 2027,
  month: 'February',
  weekdate: 19,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLScvviZoeb9_gPYuNtRuIXVfjeABjKNPOU1NDGVOORVb9Z8VVA/viewform?usp=dialog',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfmShax8-rfOlqL-LCQ9Rk9frIIb1gY0Sifi3Q5LvFOcD2afg/viewform?usp=dialog',
  location: 'Discord (register for more details)',
});

export const inPersonFair = new TimeEventWithLinks({
  year: 2026,
  month: 'February',
  weekdate: 26,
  startTime: '10am',
  endTime: '5pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLScjzR5IybpSkeW9xzxFgQ9scsaitbd5qaZU_1f3aIelch2yJw/viewform?usp=dialog',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfmShax8-rfOlqL-LCQ9Rk9frIIb1gY0Sifi3Q5LvFOcD2afg/viewform?usp=dialog',
  location: 'the TAMU campus in the MSC Gates Ballroom (MSC 2400)',
});

export const fairTimes = {
  yearStart: 2026,
  yearEnd: 2027,
  get yearEnDashRange() { return `${this.yearStart}–${String(this.yearEnd).substring(2)}`; },
};

export const portfolioWorkshops = {
  fallLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf7Io87UcBUhN6j4_AqZxsU6BZY0opkiv-rrZVdcVOtUdQaGQ/viewform?usp=dialog',
  springLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfw36CTF-795JLLlOfeu4X6xlA5DKyQu4c7IKPT5Cek3KNFTw/viewform?usp=dialog',

  fall: [
    new TimeEvent({ year: 2026, month: 'October', weekdate: 23, startTime: '1pm', endTime: '2pm' }),
  ],

  spring: [
    new TimeEvent({ year: 2027, month: 'January', weekdate: 29, startTime: '3pm', endTime: '5pm',
      additionalText: `(This event will be combined with our Professionalism Workshop)`
     }),
  ]
};

export const professionalismWorkshops = {
  fallLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdGs8ZZTn0JWKlazZ1y-Ut4AcPkQe3UPXtKRfREyUZX8N4f5Q/viewform?usp=dialog',
  springLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe6o45pXKln5V4Sk8GHsA0lFnibxUsu_5Px1pUCD_MswbkLnA/viewform?usp=dialog',

  fall: [
    new TimeEvent({ year: 2026, month: 'September', weekdate: 22, startTime: '10am', endTime: '11am' }),
    new TimeEvent({ year: 2026, month: 'September', weekdate: 23, startTime: '10am', endTime: '11am' }),
    new TimeEvent({ year: 2026, month: 'September', weekdate: 25, startTime: '12pm', endTime: '2pm' }),
  ],

  spring: [
    new TimeEvent({ year: 2027, month: 'January', weekdate: 29, startTime: '3pm', endTime: '5pm',
      additionalText: `(This event will be combined with our Portfolio Workshop)`
     }),
  ]
};

// TODO: change
export const alumniMixer = new TimeEventWithLinks({
  year: 1999,
  month: 'November',
  weekdate: 1,
  startTime: '1pm',
  endTime: '2pm',
  studentLink: '#',
  industryLink: '#',
  location: 'TBD',
});

export const portfolioReviews = {
  fall: {
    studentLink: `https://forms.gle/zC8Z24fvKsX5Wacz7`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSf-R-y_oqoMjvLP0V4Z6W30XDfUO3r9zWQJ84Keu753OP1M2g/viewform?usp=dialog`,
    events: [
      new TimeEvent({ year: 2026, month: 'November', weekdate: 6, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2026, month: 'November', weekdate: 7, startTime: '10am', endTime: '4pm' }),
    ]
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSceB3MCTRiu98S5O37T-m4GVz42inRUl_dh8weqxzc3MgztSg/viewform?usp=dialog`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSdzvEWqCEYPrNPAdKpJEqeA5DnHUCmzDEO3-_FsHxgyIwGf8Q/viewform?usp=sharing&ouid=103333525036132933132`,
    events: [
      new TimeEvent({ year: 2027, month: 'January', weekdate: 29, startTime: '10am', endTime: '4pm' }),
      new TimeEvent({ year: 2027, month: 'January', weekdate: 30, startTime: '10am', endTime: '4pm' }),
    ]
  },
};

export const mockInterviews = {
  fall: {
    studentLink: ``,
    industryLink: ``,
    events: [
    ],
  },
  
  spring: {
    studentLink: `https://docs.google.com/forms/d/e/1FAIpQLSdtx_JzNTeeV1hDV-OFCw77RvFCWcoxfvAwOhIhSJh6wJgfYA/viewform?usp=publish-editor`,
    industryLink: `https://docs.google.com/forms/d/e/1FAIpQLSfPhyWSzzzUFpFqOJbzd0_HaY1ug3NHzBETRJ17H_bJbMdO1g/viewform?usp=sharing&ouid=103333525036132933132`,
    events: [
      new TimeEvent({ year: 2027, month: 'February', weekdate: 5, startTime: '10am', endTime: '4pm' }),
    ],
  },
};
