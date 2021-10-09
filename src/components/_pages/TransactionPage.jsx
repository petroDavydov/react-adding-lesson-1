import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/Label/LabelInput";

const TransactionPage = () => {
  return (
    <section>
      <GoBackHeader title="РАСХОДИ" />
      <form>
        <LabelInput
          type="date"
          title="Day"
          name="date"
          value=""
          cbOnChange={() => {}}
        />

        <LabelInput
          type="time"
          title="Time"
          name="time"
          value=""
          cbOnChange={() => {}}
        />

        <LabelInput
          type="button"
          title="Category"
          name="category"
          value="Eat"
          cbOnChange={() => {}}
        />

        <LabelInput
          title="Sum"
          name="sum"
          value=" "
          placeholder="Enter sum"
          cbOnChange={() => {}}
        />

        <LabelInput
          type="button"
          title="Currency"
          name="currency"
          value="USD"
          cbOnChange={() => {}}
        />

        <LabelInput
          name="comment"
          value=""
          placeholder="comment"
          cbOnChange={() => {}}
        />
        <button type="submit">OK</button>
      </form>
    </section>
  );
};

export default TransactionPage;
