#version 330
layout(location=0) out vec4 light_color;

in vec2 g_uv;
in vec3 g_normal;

uniform int x;
void main()
{
    light_color = vec4(1.0, 1.0, 0.0, 1.0);
}