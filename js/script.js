// Basic starter JS

    var tablinks = document.getElementsByClassName('tab-links');
    var taccontents = document.getElementsByClassName('tab-contents');
    function openTab(tabname) {
    for (tablink of tablinks) {
    tablink.classList.remove("active-link");
}
    for (tabcontent of taccontents) {
    tabcontent.classList.remove("active-tab");
}
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
