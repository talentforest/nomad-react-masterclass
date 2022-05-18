import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export enum Fields {
  "코딩 🖥" = "코딩 🖥",
  "집안일 🏠" = "집안일 🏠",
  "기타 ⚙️" = "기타 ⚙️",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
  field: Fields;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects: [
    ({ setSelf, onSet }) => {
      const todoStoreKey = "ToDo";
      const savedValue = localStorage.getItem(todoStoreKey);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue, _, isReset) => {
        isReset
          ? localStorage.removeItem(todoStoreKey)
          : localStorage.setItem(todoStoreKey, JSON.stringify(newValue));
      });
    },
  ],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const fieldState = atom<Fields>({
  key: "field",
  default: Fields["코딩 🖥"],
});

// selector을 이용하여 각 카테고리별로 toDo들을 분류한다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
