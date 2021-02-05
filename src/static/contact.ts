export interface IContack {
  userName: string;
  userEmail: string;
  peopleCount: number;
  tableIndex: string;
  isWitnessMarriage: boolean;
}

export const contactList: IContack[] = [
  {
    userName: "張懷倫",
    userEmail: "lamgo.chang@gmail.com",
    peopleCount: 1,
    tableIndex: "未定",
    isWitnessMarriage: true,
  },
];
