function SpotifyPlayer({ embedUrl }) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <iframe
          src={embedUrl}
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          style={{ borderRadius: "12px" }}
        ></iframe>
      </div>
    );
  }
  
  export default SpotifyPlayer;
  