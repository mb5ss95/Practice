const puppeteer = require("puppeteer"); // js 크롤링

const main = async () =>{
    const browser = await puppeteer.launch({
        headless : false, // 브라우저를 숨긴다
    });
    const page = await browser.newPage();
    await page.goto("https://news.daum.net/digital#1");
    
    const data = await page.evaluate(() => {
        const webtoonLists = document.querySelectorAll(".tit_g a");
        const titles = Array.from(webtoonLists).map((li) =>{ 
            return li.textContent.trim();
        })
        return titles;
    })

    console.log(data);
    console.log("Dsdsdss");
}

main();
