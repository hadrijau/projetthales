import GoogleMapItem from "../components/GoogleMapItem";

export default function Home() {

  const lieux = [
    {
      name: "Mairie de Rennes",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d5p"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/mairie.blend?alt=media&token=58660574-5dc6-4b28-8d00-95043ef09d6f"
    },
    {
      name: "Campus CS",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d5v"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/campus_CS.blend?alt=media&token=b012bd89-8b9a-4caf-8e17-7be0395736b9"
    },
    {
      name: "Place St Anne",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d64"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/saint_anne.blend?alt=media&token=6d415d49-28f1-4636-8bcb-91cc6ec2760c"
    },
    {
      name: "Stade de Rennes",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d60"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/stade_rennes.blend?alt=media&token=628a8b69-0548-47a4-b882-914db9162f68"
    },
    {
      name: "Stade Chaban-Delmas",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d61"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/stade_Bordeaux.blend?alt=media&token=4df55ac3-d259-4cdb-81ad-998a91d812ed"
    },
    {
      name: "Stade de France",
      image: <iframe width="100%" height="640" allowFullScreen src="https://v3d.net/d63"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/stade_france.blend?alt=media&token=b1847a86-d85b-4420-bcfb-f569b5cb96b6"
    },
    {
      name: "Stade Old Trafford",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d65"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/old_trafford.blend?alt=media&token=fdd5991c-ced2-4590-b5ee-11a5459cf23f"
    },
    {
      name: "Stade San Bernabeu",
      image: <iframe width="1024" height="640" allowFullScreen src="https://v3d.net/d62"></iframe>,
      link: "https://firebasestorage.googleapis.com/v0/b/saveday-fd62e.appspot.com/o/san_bernabeu.blend?alt=media&token=bfa78f87-2cf7-4f61-94fb-e1522966b19b"
    },
  ]

  return <div className="container-id">
    <h1 style={{textAlign: 'center', marginBottom: "30px"}}>
      Catalogue des lieux répertoriés
    </h1>
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imoca.org%2Ffr%2Fthales&psig=AOvVaw3fy3HnKPlgjzXCaShEb9U9&ust=1669199623763000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKjsoafLwfsCFQAAAAAdAAAAABAD" alt=""/>

    {lieux.map((item, index) => {
      return (
          <GoogleMapItem item={item} key={index}/>
      )
    })}

  </div>
}
