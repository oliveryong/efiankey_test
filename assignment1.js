let userDownloads ={count:0, lastDownloadTime:null}

function checkDownload(memberType, userId) {
    const currentTime = Date.now();

    // Initialize user data if not already set
    if (!userDownloads[userId]) {
        userDownloads[userId] = {
            count: 0,
            lastDownloadTime: null
        };
    }

    const downloadData = userDownloads[userId];
    const timeSinceLastDownload = currentTime - (downloadData.lastDownloadTime ?? 0);

    if (memberType === 'nonmember') {
        if (timeSinceLastDownload >= 5000) { // 5 seconds in milliseconds
            downloadData.lastDownloadTime = currentTime;
            console.log("Your download is starting...");
        } else {
            console.log("Too many downloads");
        }
    } else if (memberType === 'member') {
        if (downloadData.count < 2 || timeSinceLastDownload >= 5000) {
            downloadData.count++;
            downloadData.lastDownloadTime = currentTime;

            if (timeSinceLastDownload >= 5000) {
                downloadData.count = 0;
            }

            console.log("Your download is starting...");
        } else {
            console.log("Too many downloads");
        }
    } else {
        console.log("Invalid member type");
    }
}
checkDownload('nonmember', 1)
