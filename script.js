/* =========================================
   EDUMIND DASHBOARD
   Reads quiz result from localStorage
========================================= */


/* =========================================
   GET SAVED QUIZ RESULT
========================================= */

const savedResult =
    JSON.parse(localStorage.getItem("lastQuizResult"));


/* =========================================
   UPDATE DASHBOARD
========================================= */

if (savedResult) {

    /*
        Current quiz:
        Recursion - Data Structures
    */

    const recursionScore =
        savedResult.percentage;


    /* -----------------------------------------
       FIND RECURSION WEAK AREA
    ----------------------------------------- */

    const weakItems =
        document.querySelectorAll(".weak-item");


    weakItems.forEach(item => {

        const text =
            item.innerText.toLowerCase();


        if (text.includes("recursion")) {

            /* Update percentage */

            const percentageText =
                item.querySelector(".weak-progress");


            if (percentageText) {

                percentageText.textContent =
                    recursionScore + "%";
            }


            /* Update progress bar */

            const progressBar =
                item.querySelector(".progress-bar div");


            if (progressBar) {

                progressBar.style.width =
                    recursionScore + "%";
            }


            /* Update priority */

            const priority =
                item.querySelector(".priority");


            if (priority) {

                if (recursionScore < 50) {

                    priority.textContent =
                        "High";

                    priority.className =
                        "priority high";

                }

                else if (recursionScore < 75) {

                    priority.textContent =
                        "Medium";

                    priority.className =
                        "priority medium";

                }

                else {

                    priority.textContent =
                        "Low";

                    priority.className =
                        "priority low";

                }

            }

        }

    });


    /* =========================================
       UPDATE DASHBOARD SUBJECT PERFORMANCE
    ========================================= */

    const subjectBars =
        document.querySelectorAll(".bar-item");


    subjectBars.forEach(item => {

        const text =
            item.innerText.toLowerCase();


        if (text.includes("data structures")) {

            const bar =
                item.querySelector(".large-bar div");


            if (bar) {

                bar.style.width =
                    recursionScore + "%";

            }

        }

    });


    /* =========================================
       CONSOLE LOG
    ========================================= */

    console.log(
        "EduMind Quiz Result:",
        savedResult
    );

}