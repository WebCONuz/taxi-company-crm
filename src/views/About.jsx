import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/Counter";

function About() {
  const { counter } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="text-3xl text-center py-3 text-red-600 font-bold">
        About Us {counter.data}{" "}
        <button
          onClick={() => dispatch(increment())}
          className="py-2 px-3 bg-gray-300 rounded-md mx-1"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement({ a: 5 }))}
          className="py-2 px-3 bg-gray-300 rounded-md mx-1"
        >
          -
        </button>
      </h1>
      <p className="text-justify text-lg indent-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam
        tempore qui aspernatur assumenda, modi incidunt reiciendis animi
        voluptatum error dicta exercitationem voluptatem? Quis repudiandae magni
        obcaecati voluptates illum quasi officiis delectus illo quidem
        praesentium expedita ipsum sint ullam, quisquam eveniet laborum
        aspernatur numquam consequuntur. Cumque dolorem optio tempore, non
        distinctio adipisci perferendis, quos cum modi voluptatum deserunt iste
        autem. Repellat perferendis quis minima in est assumenda illo architecto
        explicabo eos voluptas at praesentium quae, voluptatem porro repudiandae
        tenetur quasi facilis aspernatur sint recusandae fugiat. Repellat animi
        quibusdam minima, molestias doloremque autem totam voluptate et eos
        corrupti, tenetur praesentium quo voluptatum deleniti saepe.
      </p>
      <p className="text-justify text-lg indent-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, ipsam
        tempore qui aspernatur assumenda, modi incidunt reiciendis animi
        voluptatum error dicta exercitationem voluptatem? Quis repudiandae magni
        obcaecati voluptates illum quasi officiis delectus illo quidem
        praesentium expedita ipsum sint ullam, quisquam eveniet laborum
        aspernatur numquam consequuntur. Cumque dolorem optio tempore, non
        distinctio adipisci perferendis, quos cum modi voluptatum deserunt iste
        autem. Repellat perferendis quis minima in est assumenda illo architecto
        explicabo eos voluptas at praesentium quae, voluptatem porro repudiandae
        tenetur quasi facilis aspernatur sint recusandae fugiat. Repellat animi
        quibusdam minima, molestias doloremque autem totam voluptate et eos
        corrupti, tenetur praesentium quo voluptatum deleniti saepe a eaque
        aliquam distinctio. Ratione corporis, sunt quo id cupiditate similique
        iusto quaerat voluptas nesciunt. Eum cumque, doloremque debitis fuga
        voluptatum fugit sed officia sequi cum quam? Sint corporis amet quod
        nesciunt, veritatis similique rerum obcaecati voluptatum molestias quae,
        quos fugiat magnam optio architecto animi laborum fugit enim soluta id
        adipisci itaque alias! Dicta quae, voluptates quisquam amet sed natus
        eligendi vitae commodi libero? Enim, porro quo totam fuga quia!.
      </p>
    </>
  );
}

export default About;
