const cardToDo = document.querySelector("#to-do");
const btnAddTasck = document.querySelector("#add");
const inputTitle = document.querySelector("#valueTasck");
const inputDiscription = document.querySelector("#discription");
const divInProgress = document.querySelector(".inProgres__wrapper");
const divDone = document.querySelector(".done__wrapper");
const state = { todo: [], inprogress: [], done: [], delet: [] };

btnAddTasck.addEventListener("click", (event) => {
  const todoElement = getToDoElem();
  state.inprogress.push(todoElement);
  inputTitle.value = "";
  inputDiscription.value = "";
  divInProgress.innerHTML = "";
  state.inprogress.forEach((elem) => {
    divInProgress.innerHTML += createElem(elem.title, elem.discription);
  });

  const toDoDiv = [...document.querySelectorAll("#rer")];
  toDoDiv.forEach((elemDiv) => {
    const divCard = elemDiv.closest("#rer");
    const btnDone = divCard.querySelector("#done");
    btnDone.addEventListener("click", (event) => {
      state.inprogress.forEach((elem) => {
        if (elem === todoElement) {
          state.done.push(...state.inprogress.splice(elem, 1));
          console.log(state.inprogress);
          console.log(state.done);
          elemDiv.remove();
          divDone.innerHTML += createElem(elem.title, elem.discription);
        }
      });
    });
  });
});

const getToDoElem = () => {
  const title = inputTitle.value;
  const discription = inputDiscription.value;
  return { title: title, discription: discription };
};

const createElem = (title, disc) => {
  const div = document.createElement("div");
  return (div.innerHTML = `<div id="rer">${title} ${disc}
    <button class = 'btnClick' id = "done">&#10004</button>
    <button class = 'btnClick' id = "re">&#9998</button>
    <button class = 'btnClick' id = "delet">&#10007</button>
    </div>`);
};

const deletEndPushElem = () => {
  state.inprogress.forEach((elem) => {});
};
