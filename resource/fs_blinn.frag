#version 330
layout(location=0) out vec4 color;

uniform sampler2D text;
uniform vec3 object_color;
uniform vec3 light_pos;
uniform vec3 eye_pos;

in vec3 g_position;
in vec2 g_uv;
in vec3 g_normal;


void main()
{


	//Ambient light
	float ambientLight =0.1;

	//Diffuse light
    vec3 lightDir = normalize(light_pos - g_position);
    vec3 n = normalize(g_normal);
    float diffuse = max(dot(lightDir, n), 0);  


	//specular light

	

	//Blinn-Phong shader
	vec3 eyeDir = normalize(eye_pos - g_position);
	vec3 halfwayDir = normalize(lightDir+eyeDir);
	float spec = pow(max(dot(n,halfwayDir),0.0),28);	

	
	color = vec4(object_color*texture(text, g_uv).rgb*(ambientLight+diffuse)+spec*vec3(0.8) , 1.0);
    
}