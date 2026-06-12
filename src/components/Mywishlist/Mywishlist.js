import './Mywishlist.css';

const Mywishlist = () => (
  <main className="wishlist-page">
    <section className="wishlist-empty">
      <img
        className="wishlist-icon"
        src="/car.svg"
        alt="car"
        aria-hidden="true"
      />

      <h1>Ви ще не додали жодного оголошення в обране</h1>
      <p>
        Збережіть цікаві пропозиції, щоб відстежувати ціни і
        <br />
        швидко знаходити те, що сподобалося.
      </p>
    </section>
  </main>
);

export default Mywishlist;
