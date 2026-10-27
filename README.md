
# Cuidados-Pet
O CuidadosPet é uma aplicação web em Java para o controle básico do dia a dia de uma clínica veterinária de pequeno porte. 

Ele permite à recepção e à equipe veterinária registrar os donos (tutores), os animais atendidos, as consultas e os profissionais, além de permitir consultar, corrigir e remover essas informações com facilidade. 

O sistema é voltado para pequenas clínicas e consultórios veterinários que ainda controlam seus atendimentos em papel ou planilhas e precisam de uma ferramenta simples e organizada.

## Entidades

## Tecnologias

## Diagrama
<mxfile host="app.diagrams.net">
  <diagram name="Página-1" id="Yq2cAcSA-CsMUxEXB9Xn">
    <mxGraphModel dx="1414" dy="786" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-1" parent="1" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" value="&lt;span style=&quot;font-size:11pt;font-family:Arial,sans-serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;&quot; id=&quot;docs-internal-guid-d22cada5-7fff-5af4-020c-5eb43a188e68&quot;&gt;Veterinario&lt;/span&gt;" vertex="1">
          <mxGeometry height="210" width="140" x="30" y="60" as="geometry">
            <mxRectangle height="30" width="110" x="160" y="280" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-2" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- id: int" vertex="1">
          <mxGeometry height="30" width="140" y="30" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-3" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- nome: String" vertex="1">
          <mxGeometry height="30" width="140" y="60" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-4" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- telefone: String" vertex="1">
          <mxGeometry height="30" width="140" y="90" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-13" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- email: String" vertex="1">
          <mxGeometry height="30" width="140" y="120" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-15" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- endereço: String" vertex="1">
          <mxGeometry height="30" width="140" y="150" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-14" parent="8rNWiORtvzV4ZNUZ6tL7-1" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- especialidade: String" vertex="1">
          <mxGeometry height="30" width="140" y="180" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-19" parent="1" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" value="Tutor" vertex="1">
          <mxGeometry height="180" width="140" x="220" y="60" as="geometry">
            <mxRectangle height="30" width="110" x="160" y="280" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-20" parent="8rNWiORtvzV4ZNUZ6tL7-19" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- id: int" vertex="1">
          <mxGeometry height="30" width="140" y="30" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-21" parent="8rNWiORtvzV4ZNUZ6tL7-19" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- nome: String" vertex="1">
          <mxGeometry height="30" width="140" y="60" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-22" parent="8rNWiORtvzV4ZNUZ6tL7-19" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- telefone: String" vertex="1">
          <mxGeometry height="30" width="140" y="90" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-23" parent="8rNWiORtvzV4ZNUZ6tL7-19" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- email: String" vertex="1">
          <mxGeometry height="30" width="140" y="120" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-24" parent="8rNWiORtvzV4ZNUZ6tL7-19" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- endereço: String" vertex="1">
          <mxGeometry height="30" width="140" y="150" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-26" parent="1" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" value="Animal" vertex="1">
          <mxGeometry height="240" width="140" x="414" y="60" as="geometry">
            <mxRectangle height="30" width="110" x="160" y="280" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-27" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- id: int" vertex="1">
          <mxGeometry height="30" width="140" y="30" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-28" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- nome: String" vertex="1">
          <mxGeometry height="30" width="140" y="60" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-29" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- especie: String" vertex="1">
          <mxGeometry height="30" width="140" y="90" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-30" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- raça: String" vertex="1">
          <mxGeometry height="30" width="140" y="120" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-31" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- idade: int" vertex="1">
          <mxGeometry height="30" width="140" y="150" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-32" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- peso: float" vertex="1">
          <mxGeometry height="30" width="140" y="180" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-33" parent="8rNWiORtvzV4ZNUZ6tL7-26" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- nomeTutor: String" vertex="1">
          <mxGeometry height="30" width="140" y="210" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-34" parent="1" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" value="Consulta" vertex="1">
          <mxGeometry height="210" width="150" x="620" y="60" as="geometry">
            <mxRectangle height="30" width="110" x="160" y="280" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-35" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- id: int" vertex="1">
          <mxGeometry height="30" width="150" y="30" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-36" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- data: date" vertex="1">
          <mxGeometry height="30" width="150" y="60" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-37" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="-&amp;nbsp;nomeAnimal: String" vertex="1">
          <mxGeometry height="30" width="150" y="90" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-38" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="-&amp;nbsp;nomeVeterinario: String" vertex="1">
          <mxGeometry height="30" width="150" y="120" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-39" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- motivo: String" vertex="1">
          <mxGeometry height="30" width="150" y="150" as="geometry" />
        </mxCell>
        <mxCell id="8rNWiORtvzV4ZNUZ6tL7-40" parent="8rNWiORtvzV4ZNUZ6tL7-34" style="text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingLeft=4;spacingRight=4;overflow=hidden;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;rotatable=0;whiteSpace=wrap;html=1;" value="- valor: float" vertex="1">
          <mxGeometry height="30" width="150" y="180" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>


[Diagrama Cuidados-Pet.drawio](https://github.com/user-attachments/files/33127650/Diagrama.Cuidados-Pet.drawio)


## Como rodar
