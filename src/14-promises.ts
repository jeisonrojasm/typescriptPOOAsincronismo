(async () => {
    function delay(time: number) {
        const promise = new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, time);
        });
        return promise;
    }

    const res = await delay(3000);
    console.log(res);
})();
