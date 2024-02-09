"use client"
import { useRouter } from "next/navigation";
import styles from "./style.module.css";
export  function Homepage() {
 const router=useRouter()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.textarea}>
            <h1 className={styles.leftheader}>
              Organize your work and life, finally.
            </h1>
            <p className={styles.para}>
              Become focused, organized, and calm with Todoist. The world’s #1
              task manager and to-do list app.
            </p>
            <div className={styles.btnparent}>
              <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2" onClick={()=>router.push("./addtask")}>Add Your Task</button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img
              src="https://res.cdn.office.net/todo/1602936_2.115.1/icons/logo.png"
              alt="" className={styles.img}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;