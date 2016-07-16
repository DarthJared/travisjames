var headshotSel = true;

function headshotsSelected() {
    if (!headshotSel) {
        $(".headshotOpt").addClass("photoSelected");
        $(".otherOpt").removeClass("photoSelected");

        $(".headshotPhoto").show();
        $(".otherPhoto").hide();
        headshotSel = true;
    }
}

function otherSelected() {
    if (headshotSel) {
        $(".otherOpt").addClass("photoSelected");
        $(".headshotOpt").removeClass("photoSelected");

        $(".headshotPhoto").hide();
        $(".otherPhoto").show();
        headshotSel = false;
    }
}