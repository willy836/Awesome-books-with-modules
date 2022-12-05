export function displayBooks() {
    const bklist = document.querySelector('.book-list');
    bklist.innerHTML = '';
  
    const booksArr = localStorage.getItem('bks') ? JSON.parse(localStorage.getItem('bks')) : [];
    let myBook = booksArr.head;
    while (myBook !== null) {
      const article = document.createElement('article');
      article.className = 'article';
      const titleP = document.createElement('p');
      titleP.className = 'title';
      titleP.textContent = myBook.title;
      article.appendChild(titleP);
  
      const authorP = document.createElement('p');
      authorP.className = 'author';
      authorP.textContent = myBook.author;
      article.appendChild(authorP);
  
      const rmvBtn = document.createElement('button');
      rmvBtn.className = 'remove-btn';
      rmvBtn.textContent = 'Remove';
      const rmvBtnDiv = document.createElement('div');
      rmvBtnDiv.className = 'rmv-div';
      rmvBtnDiv.appendChild(rmvBtn);
      article.appendChild(rmvBtnDiv);
  
      bklist.appendChild(article);
      bklist.classList.add('show-container');
  
      myBook = myBook.next;
    }
  }