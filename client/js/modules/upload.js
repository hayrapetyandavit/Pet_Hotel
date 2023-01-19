function upload() {
    const form = document.getElementById('uploadForm');
    const sendFiles = async () => {
        const myFiles = document.getElementById('myFiles').files;
        const formData = new FormData()
        Object.keys(myFiles).forEach(key => {
            formData.append(myFiles.item(key).name, myFiles.item(key))
        })
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        })
        const json = await response.json();
    }
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        sendFiles();
    })
}

export default upload;