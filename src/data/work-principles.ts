export interface WorkPrinciple {
  id: string;
  title: string;
  description: string;
}

export const workPrinciples: WorkPrinciple[] = [
  {
    id: "communication",
    title: "Понятная коммуникация",
    description:
      "Объясняю решения без жаргона, согласовываю этапы до старта и держу в курсе прогресса.",
  },
  {
    id: "deadlines",
    title: "Сроки после брифа",
    description:
      "Оцениваю сроки, когда понятна задача. Без обещаний «за три дня» до обсуждения деталей.",
  },
  {
    id: "iterations",
    title: "Правки без бюрократии",
    description:
      "Вношу изменения оперативно: правки на этапе согласования — без лишних формальностей.",
  },
  {
    id: "delivery",
    title: "От кода до деплоя",
    description:
      "Сам пишу, настраиваю и выкладываю проект — вы получаете готовую ссылку, а не архив с файлами.",
  },
];
