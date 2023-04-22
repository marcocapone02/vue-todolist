const {createApp} = Vue;

createApp({

data(){

  return{
  list:
    [
      {
        text:"Spesa",
        done: true,
      },

      {
        text:"Cucinare",
        done: false,
      },

      {
        text:"Stirare",
        done: false,
      },

      {
        text:"Allenamento",
        done: true,
      },

      {
        text:"Colloquio",
        done: false,
      },

      {
        text:"Aperitivo",
        done: true,
      },
    ],

    addTask: "",
  }
},

methods:{
  newTask(){
    const task = {
      text: this.addTask,
      done: false
    }
    console.log(this.addTask)
    this.list.unshift(task)
    this.addTask="";
  },
  
  deleteTask(i){
    this.list.splice(i,1);
  }
}
}).mount("#app")