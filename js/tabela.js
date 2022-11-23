//
function CreateWrite(lin,col) {
    document.write('<table class="tabela">')
    for (i = 0; i < lin; i++) {
        document.write("<tr>")
        for (j = 0; j < col; j++) {
            document.write('<td id= "'+("ttr"+(i) + "td" + (j))+'">')
            document.write("</td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

//
function CreateElement(lin, col) {
    const table = document.createElement("table");
    table.classList.add("tabela");

    for (i = 0; i < lin; i++) {
        const tr = document.createElement("tr");

        for (j = 0; j < col; j++) {
            const td = document.createElement("td");
            td.setAttribute("id", ("ttr"+(i) + "td" + (j)));
            tr.appendChild(td);
        }

        table.appendChild(tr);
        return table;
    }
}

//
function CreateWithMatriz(matriz,lin,col) {
    const table = document.createElement("table");
    table.classList.add("tabela");

    for (i = 0; i < lin; i++) {
        const tr = document.createElement("tr");

        for (j = 0; j < col; j++) {
            const td = document.createElement("td");
            td.setAttribute("id", ("ttr"+(i) + "td" + (j)));
            var text = document.createTextNode(matriz[i][j])
            td.appendChild(text)            
            tr.appendChild(td);
        }
        table.appendChild(tr);
        return table;
    }
}

//
function CreateWithElement(element,lin,col) {
    const table = document.createElement("table");
    table.classList.add("tabela");

    for (i = 0; i < lin; i++) {
        const tr = document.createElement("tr");

        for (j = 0; j < col; j++) {
            const td = document.createElement("td");
            td.setAttribute("id", ("ttr"+(i) + "td" + (j)));
            td.appendChild(element)
            tr.appendChild(td);
        }
        table.appendChild(tr);
        return table;
    }
}



module.exports={
    CreateWrite:CreateWrite,
    CreateElement:CreateElement,
    CreateWithMatriz:CreateWithMatriz,
    CreateWithElement:CreateWithElement,
}




