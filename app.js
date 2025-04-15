// 添加搜索函数并创建箭头功能
const search =() =>{
	// 定义变量范围，即搜索框盒子，再通过ID获取元素（键入内容
	const searchbox = document.getElementById("search-item").value.toUpperCase();
	// 采用变量，在输入搜索内容可以搜索，需要定义菜谱的父组
	// const storeitems = document.getElementById("Recipe-list")
	// 访问全部各个菜谱
	// const product = document.querySelectorAll(".Recipe")
	// const recipe = document.querySelectorAll(".Recipe")
	const recipes = document.querySelectorAll(".Recipe")
	const startTime = performance.now(); 
	// 高精度计时
	// 限定搜索的范围在h2和h3
	// const rname = document.getElementsByTagName("h3")
	
	// 创建for函数，根据搜索结果重排列表，
	// 创建变量i，让i从零开始
	// for(var i=0;i< rname.length; i++){
	for(let i=0;i< recipes.length; i++){
		const recipe = recipes[i];
		// 获取所有需要搜索的文本元素
		const h2Text = recipe.querySelector("h2")?.textContent || "";
		const h3Text = recipe.querySelector("h3")?.textContent || "";
		const h4Text = recipe.querySelector("h4")?.textContent || "";
		
		// 合并所有文本内容进行搜索
		const combinedText=`${h2Text} ${h3Text} ${h4Text}`.toUpperCase();
		
		if(combinedText.indexOf(searchbox) > -1){
			recipe.style.display="";
		}else{
			recipe.style.display="none";
		}
		// 下面是搜单独h3的时候用的
		// let match =recipe[i].getElementsByTagName('h3')[0];
		
		// 仅限菜谱列表里有这个数据的时候
		// if(match){
			// let textvalue = match.textContent||match.innerHTML
			
			// 获取文本，toUpperCase转为大写？why，因为原本是英文吗？
			// indexOf内添加索引，括号内将搜索结果给到搜索盒子searchbox，如果用户输入了数据，则搜索盒子内数据大于-1
			// if(textvalue.toUpperCase().indexOf(searchbox)>-1){
				// 当用户输入了数据，值大于-1的时候，我们重排菜谱列表展示匹配数据
				// recipe[i].style.display="";
				// }
				// 如果没有任何搜索结果
				// else{
					// recipe[i].style.display="none";
				// }
			// }
		
	}
	const duration = performance.now() - startTime;
  console.table([
    { '测试项': '关键词搜索', 
      '耗时(ms)': duration.toFixed(2),
      '数据量': document.querySelectorAll('.Recipe').length
      }
  ]);
}
