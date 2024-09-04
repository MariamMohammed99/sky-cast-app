import useGeolocation from '../../hooks/useGeolocation';

const LandingDisplayPage = () => {
  const {
    coordinates,
    geolocationError,
    loadingGeolocation,
    permissionDenied,
  } = useGeolocation();

  if (loadingGeolocation) return <p>Loading...</p>;
  if (geolocationError)
    return (
      <div>
        <p>{geolocationError}</p>
        {permissionDenied && (
          <div>
            <p>Geolocation access has been denied. To enable it:</p>
            <ul>
              <li>
                For Chrome: Go to Settings &gt; Privacy and Security &gt; Site
                Settings &gt; Location and make sure the site is allowed.
              </li>
              <li>
                For Firefox: Go to Preferences &gt; Privacy & Security &gt;
                Permissions &gt; Location and check the site settings.
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  if (!coordinates) return <p>Coordinates not available.</p>;

  return (
    <>
      <div>
        {/* <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p> */}
        hu
      </div>
    </>
  );
};

export default LandingDisplayPage;
