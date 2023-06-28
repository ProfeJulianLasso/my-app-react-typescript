import { ReactElement } from "react";

export type TableMoleculeProps = {
  id?: string;
  footer?: string[];
  className?: string;
  header: Array<string | ReactElement>;
  data: Array<Array<string | ReactElement>>;
};

const TableMolecule = ({
  id,
  data,
  header,
  footer,
  className,
}: TableMoleculeProps) => {
  return (
    <table id={id} className={className}>
      <thead>
        <tr>
          {header.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {item.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
      {footer && (
        <tfoot>
          <tr>
            {footer.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </tfoot>
      )}
    </table>
  );
};

export default TableMolecule;
