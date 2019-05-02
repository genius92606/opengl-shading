#version 330
layout(location=0) out vec4 color;


in vec3 g_position;
in vec2 g_uv;
in vec3 g_normal;
in vec4 g_color;

void main()
{


	
	//Diffuse light
    //vec3 lightDir = normalize(light_pos - g_position);
    //vec3 n = normalize(g_normal);
    //float cosine = max(dot(lightDir, n), 0);  


	//specular light

    //vec3 r = abs(reflect(lightDir, n));
    //vec3 eyeDir = abs(normalize(eye_pos - g_position));
    //float spec = cosine*pow(dot(r, eyeDir), 10);


	

	//regular Phong shader
	//vec3 reflectDir = reflect(-lightDir, n);
	//vec3 eyeDir = normalize(eye_pos - g_position);
	//float spec = pow(max(dot(eyeDir,reflectDir),0.0),8);

		
	
	color = g_color;
    
}