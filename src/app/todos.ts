const date1 = new Date(2026, 6, 18, 10, 24);
const date2 = new Date(2026, 6, 19, 14, 47);

export const initialTodos = [
  {
    title: "Изучить React",
    desc: "Да поскорее!",
    image: "",
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime(),
  },
  {
    title: "Изучить React",
    desc: "Да поскорее!",
    image: "",
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime(),
  },
];
