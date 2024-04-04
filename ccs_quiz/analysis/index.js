
window.onload = function(){
    document.querySelector('.try').addEventListener('click',function(){
        let code = `
<!DOCTYPE html>
<html>
<head>
    <title>这里是</title>
    <body>
        <h1>演示标题的使用</h1>
    </body>
</head>
</html>
            
        `;
        let hrefArray = location.href.split('/');
        let key = hrefArray[hrefArray.length-1].split('.')[0]
        localStorage.setItem(key,code)
         window.open(`../playField.html?key=${key}`);
    });
   
    
}