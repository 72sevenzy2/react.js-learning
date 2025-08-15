function configsubmit(e, btnid) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById(btnid)?.click();
    }
}

export default configsubmit;