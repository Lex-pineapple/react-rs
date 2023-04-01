/**
 * Takes the path from the router and transforms it to user friendly output.
 *
 * @param {string}   path        The path within the router.
 *
 * @return {string} Returns the name of the current path in user-friendly way.
 */

function PrettifyLocation(path: string): string {
  if (path == '/') return 'Home';
  else if (path == '/about') return 'About';
  else if (path == '/form') return 'Form';
  else return 'Not Found';
}

export default PrettifyLocation;
