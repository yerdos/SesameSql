
        // 定义接口地址
        const apiUrl = 'http://localhost:5151/api/sni/zhima/sql/chat';

        // 定义 fetch 函数来获取数据
        async function fetchSQLQuery(content) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST', // 如果你的接口需要POST请求
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        content: content  // 这里是传递的请求参数
                    })
                });

                // 检查响应状态
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                // 获取返回的 Markdown 数据
                const data = await response.json();
                
                // 解析返回的数据，这里假设 data.content 是 markdown 格式
                const markdownContent = data.data;

                // 使用 marked.js 将 Markdown 转换为 HTML
                const htmlContent = marked.parse(markdownContent);;
				
				return htmlContent;


            } catch (error) {
                console.error('Error fetching SQL query:', error);
            }
        }

