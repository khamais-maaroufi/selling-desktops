import { useState, useContext, useEffect } from "react";
//import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
//import {Context} from "../context";
import { useRouter } from "next/router";
import { db } from "../utils/firebase";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

const Demander = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.table({ name, email, password });
      const collectionRef = collection(db, "Emails-list");
      const docRef = await addDoc(collectionRef, { name, email, password });
      /*const {data} = await axios.post('/api/register',
             {name, email, password});*/
      console.log("REGISTER RESPONSE", docRef);
      toast.success("un Email est envoyé vers ton courrier, verifier le spam");
      setLoading(false);
    } catch (err) {
      //toast.error(err.response.data);
      toast.error("desolé, essayer plus tard!");
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">
        Demander un Devis
      </h1>

      <h1>
        <div className="container col-md-4 offset-md-4 pb-5">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control mb-4 p-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Entrer votre nom..."
              required
            />
            <input
              type="emailt"
              className="form-control mb-4 p-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrer l'Email..."
              required
            />
            <input
              type="password"
              className="form-control mb-4 p-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrer le reference...."
              required
            />
            <button
              type="submit"
              /*className="btn btn-block btn-primary"*/ className="btn btn-primary w-100"
              disabled={!name || !password || !email || loading}
            >
              {loading ? <SyncOutlined spin /> : "Confirmer"}
            </button>
          </form>
          <p className="text-center p3">
            <h6>
              Tu n'a pas de reference encore?{" "}
              <Link href="/choisir">
                <a>Concevez Votre Bureau ici</a>
              </Link>
            </h6>
          </p>
        </div>
      </h1>
    </>
  );
};

export default Demander;
