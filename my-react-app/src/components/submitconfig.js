function configsubmit(e, btnid) {
   e.key === "Enter" ? e.preventDefault(); document.getElementById(btnid)?.click(); : null;
}
