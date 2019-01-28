(function () {
    'use strict';
    const voteNow = document.querySelector('.voteHere');
    if (voteNow) {
        voteNow.addEventListener('click', (e) => {
            e.preventDefault();
            // if(e.target.tagName === 'A' | e.target.tagName === 'BUTTON'){
            //     console.log('HERRRRRRRRRREEEE!');
            // }
            if (e.target.tagName === 'A' | e.target.tagName === 'BUTTON') {
                // console.log(e.target.parentElement.nextSiblingElement);
                // console.log(e.target.parentElement.parentElement);
                const deactivateBtn = Array.from(e.target.parentElement.parentElement.parentElement.parentElement.children);

                deactivateBtn.forEach((value)=>{
                    value.querySelector('td:nth-child(4) button').style.opacity = 0;
                });

                document.querySelector('.successModal').classList.toggle('showModal');
                setTimeout(() => {
                    document.querySelector('.successModal').classList.toggle('showModal');
                }, 3000);
            }
        });
    }
})();