/**
 * Define la estructura para un elemento de red social individual.
 */
export interface SocialNetworkLink {
  /**
   * Nombre de la plataforma (ej: "Instagram", "SoundCloud").
   */
  name: string; 

  /**
   * URL completa al perfil del DJ en esa red social.
   */
  url: string;

  /**
   * URL de la imagen/icono que representa la red social.
   */
  imageUrl: ((_props: astroHTML.JSX.SVGAttributes) => any) & ImageMetadata;

  class?: string;
}

/**
 * Define la estructura para la colección completa de enlaces.
 */
export type SocialNetworksList = SocialNetworkLink[];