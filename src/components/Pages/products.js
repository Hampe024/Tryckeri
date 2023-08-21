import { useParams } from 'react-router-dom';

import data from "../../data/products.json"
import NotFound from '../404';
import Pennor from '../productPages/Pennor';
import Reklamartiklar from '../productPages/Reklamartiklar';
import Brevpapper from '../productPages/Brevpapper';
import Visitkort from '../productPages/Visitkort';
import Kuvert from '../productPages/Kuvert';
import Godis from '../productPages/Godis';
import Textil from '../productPages/Textil';

export default function Products() {

    const productComponents = {
        "Pennor": Pennor,
        "Reklamartiklar": Reklamartiklar,
        "Brevpapper": Brevpapper,
        "Visitkort": Visitkort,
        "Kuvert": Kuvert,
        "Godis": Godis,
        "Textil": Textil
    }

    const { product } = useParams();

    const ProductComponent = productComponents[product];

    if (!ProductComponent) {
        return (
          <div>
            <NotFound />
          </div>
        );
    }

    return (
        <div>
            <h1>{product}</h1>
            <ProductComponent />
        </div>
    );
}
