// code your solution here

function superbowlWin(record) {
    const sadReality = record.find(win => win.result === "W")
    if (sadReality){
        return sadReality.year
    }
}


