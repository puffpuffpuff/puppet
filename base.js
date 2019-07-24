const puppeteer = require('puppeteer');

(async () => {    
    async function _tabs(_url){
        const browser = await puppeteer.launch({
            defaultViewport: {width: 1200, height: 1000},
        });
        const page = await browser.newPage();

        await page.setDefaultNavigationTimeout(0); 
        await page.goto(_url);

        return page;
    }

    const instance = [
        await _tabs(''),
        
    ];
    let sequence = 0;
    
    while (true) {
        let t =  new Date();
        console.log('=========================  start  =========================');
        console.log('connection sequence: '+sequence);
        console.log('at: '+t.toLocaleTimeString());
        console.log('===========================================================')

        for (let i = 0; i < instance.length; i++) {
            console.log('thread :'+i);
            console.log('acessing :'+instance[i].url());
            console.log('===========================================================')    
        }

        await Promise.all([
            instance[0].waitForNavigation(),
            instance[1].waitForNavigation(),
            instance[2].waitForNavigation(),
            instance[3].waitForNavigation(),
            instance[4].waitForNavigation(),
            instance[5].waitForNavigation(),
            instance[6].waitForNavigation(),
            instance[7].waitForNavigation(),
            instance[8].waitForNavigation(),
            instance[9].waitForNavigation(),
        ]);   

        console.log('\n\n');
        sequence++;     
    }
})();

