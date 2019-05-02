#version 330
layout(location = 0) in vec3 position;
layout(location = 1) in vec2 texcoord;
layout(location = 2) in vec3 normal;


uniform mat4 model;
uniform mat4 vp;
uniform sampler2D text;
uniform vec3 light_pos;
uniform vec3 object_color;
uniform vec3 eye_pos;


out vec3 v_position;
out vec2 v_uv;
out vec3 v_normal;

out vec4 v_color;

void main()
{
	
    v_position = (model*vec4(position, 1.0)).xyz;
    v_uv = texcoord;
    v_normal = (model*vec4(normal, 0.0)).xyz;
    

	//ambient
	float ambientLight = 0.1;

	//diffuse
	vec3 lightDir = normalize(light_pos-v_position);
	vec3 n=normalize(v_normal);
	float diffuse=max(dot(n,lightDir),0.0);

	//specular
	//regular Phong shader
	vec3 reflectDir = reflect(-lightDir, n);
	vec3 eyeDir = normalize(eye_pos - v_position);
	float spec = pow(max(dot(eyeDir,reflectDir),0.0),8);

	

	v_color= vec4(object_color*texture(text, texcoord).rgb*(ambientLight+diffuse)+spec*vec3(0.8),1.0);

	gl_Position = vp*model*vec4(position, 1.0);

}