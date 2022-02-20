function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
        return response.json();
    }).then((data) => {
        const body = document.querySelector('body');
        body.style.backgroundColor='gray'
        const table = document.createElement('table')

        const tableHead = document.createElement('thead');

        const tableHeadRow = document.createElement('tr');
        const tableHeading1 = document.createElement('th');
        tableHeading1.textContent = 'Id';
        tableHeading1.style.border='1px solid black'
        tableHeadRow.appendChild(tableHeading1);
        const tableHeading2 = document.createElement('th');
        tableHeading2.textContent = 'Title';
        tableHeading2.style.border='1px solid black'
        tableHeadRow.appendChild(tableHeading2);
        const tableHeading3 = document.createElement('th');
        tableHeading3.textContent = 'Completed';
        tableHeading3.style.border='1px solid black'
        tableHeadRow.appendChild(tableHeading3);

        tableHead.appendChild(tableHeadRow);
        table.appendChild(tableHead);
        body.appendChild(table);

        const tableBody = document.createElement('tbody')
        for (let i = 0; i < data.length; i++) {
            const tableBodyRow = document.createElement('tr')
            
            const IdData=document.createElement('td');
            IdData.textContent=data[i].id;
            IdData.style.textAlign='center'
            tableBodyRow.appendChild(IdData);

            const titleData=document.createElement('td');
            titleData.textContent=data[i].title;
            titleData.style.textAlign='center'
            tableBodyRow.appendChild(titleData);

            const completedData=document.createElement('td');
            completedData.textContent=data[i].completed;
            completedData.style.textAlign='center'
            tableBodyRow.appendChild(completedData);

            tableBody.appendChild(tableBodyRow)
            table.appendChild(tableBody);
        }











    }).catch((err) => {
        console.log(err)
    })
        .catch((err) => {
            console.log(err)
        })
}

getData();
