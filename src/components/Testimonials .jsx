import React from 'react';
import ContactFormModal from './ContactForm';

// Example posts data (easy to modify in code)
const postsData = [
    {
        id: 1,
        user: 'Aydon Cupido',
        username: '@aydonC',
        profileImage: '/aydon.jpg',
        content: 'If you want to show some love and leave a message, Fill out this form please!❤️',
        image: null,
        video: null,
    },

    {
        id: 3,
        user: 'Not Aydon Cupido',
        username: '@NotaydonC',
        profileImage: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABQAFADASIAAhEBAxEB/8QAHAAAAwEAAwEBAAAAAAAAAAAABQYIBwMECQEC/8QAORAAAQMCBQEGBAMGBwAAAAAAAQIDBAURAAYHEiExEyJBUWGBCBRxkRUyoRYXIyRCUiU0YqLB0eH/xAAaAQADAAMBAAAAAAAAAAAAAAAEBQYBAgcD/8QALBEAAgIBAQUHBAMAAAAAAAAAAQIAAxEEBRIhMUETIlFhgbHBcaHh8CNC0f/aAAwDAQACEQMRAD8AludprQoIUuPCUFoQVIs4o8jp44aaZkWgVKmtF6C6t/5cXX2qhY2+uFmnan0jMbFQVTQ/IejMF1SVtFIAv5nG0ZQZbkZbW4Iyy4qMVcgf2/XBjuqkHPSBgMeEF5b0VyrUHY4mw3lNNspkJKXlA9oepvf9MEMraR5ey7m5E6lMPspp6zJRueJG9Q2qJv4WGGiVnnKOT8o0ep1uoKpzM1Ko7SlMqJUtFgocA4xnUHOP7yKpIplCmSEZSU0hL7jO5pc5figk2IbF+Rxc+gws7RWSwWHhx+kPprsaxBTzgzWKj/D/AAY07t6pUq5mlalL7OjvKf7NajdV1n+HYdLXuPLCXC1XymjT/LOVYrk6I5S35J3VJkI3pcc3J5SSOAbG9sbtkjRmnqoyFwIkWPZNtqGxfp4nqcCNQtKqZIoz3z0ZhboSQCtobh72wsTaVSOuBkA/iPzsV3UgvxgLRZLVSz7TuzWkp7N1YUOQe4cIMxf+bWi6rum/3x+tB6u1pjq5So81SlUeatyIkuG4YcWkhChfwJsD9b4c4GV0S23UFvaFO3ufrilptW12sHLA+ZLXUtQezbnx+JxayR+x08yC2gEFUFbqh9SMLWlEQN1SrKPUUt4/pjUtdqG3Hy5lJlPPY0sAAep/8xnmQYS236+sAjsqU6T9MeK4OlJ+vvMcrB6e0StD6U49FzevYQpEAEXHjuxbCcpKo1CSWiUKTGF/I93EsfD1T3KpEziy2LuGK2ge6xi0cy1RlNDcbT+cMlNh9MavlbVrX94zIIZWYyWPiLacrOSckU5psgx35jx/1XWBbHzJNPEJqP2cJUmMgBJ2rCAOOSSca03lOLX6nlpmotnsHGHloSf6iXQOPvgdS9M41Zn1SgGMpUJqTwwtRBI4IBI8MSWu1KqzV+ZP3ljsjTtui4HnwHoJoWRq3SSymA7SlwXAQEvIkIdSVeFynjxwJ1GzHSZUZcFqjKqbyO44v5htoJPqpRtjro02h5SmxIjDkWmtFQ3IbNkg3sLnxNzbjphcpGn0StZzzBSBNhVJuZ2gQC4SNyQA6jcOUnvD2NvTCVQpYnPdH74/MpOzcAHPePn+PiTVqlSXU1JF6e/AjFYW2XFpXyFeCkmxxukJkkdkOO+LnCFrllNOmsJqmIbW0EOdqhDii4B3hwL+HPTDeag1BXAC5SXHJUZiWtI47MuJCtvsCPvi52XaLK9wdeXpIXa9LJYbD0xn1jnrhGZplDoj8ht2RspbKdrSNx5JtxjKKTJRT/2nL7aY7btLW2lRX3je3VPh1xpevObI6adR20KbeH4ZHCrdRYXxgVVzW7LqEohPZtKZIQOpFyOuGFNZOnwf3jEbMO04R3+EFloVPMq5CghtSG0XPnzYffFZ1rKTisvT5JB/hslV/bEnfD7lmXlmJVm5zqXS7UIaELQeoLiRb9cXvmRpKMg1cgWvGI++PK8suqGPKbputScybs51duI/kkxHNz0WAVOBJ6ErPH1x0dNM2PZti1upQf5KYmS7GI7TtFJUkAA3I6ng9MKaXw/X5h37gyot8m9rE4SfhvqVVRmLNjrbTog/MjcqxLe8qXYX6brAn2wh12jS3TPZ/Yf7ylDsvVvTetWe6ffEqbS7KlVzaC5UqxT4b7JKFRn97q03BueifTxI5H0wq6lZZreSc2xDTKhSJSpSlth2OVMnu7doKe/fcSelrbb4cMp1ymFz+cmmBIIN3ErCSR5euEHVTNNNpcoux6kie+0bpfW4DsB8fribqKnu7nGW7WKoLFuEQNeaD+2biWatUSw5Cjla3WUglTiQCUC/rxfGUMuKXHYKXFq2bW0qWq6tqRtTc/QDDFVpdb1DnPRaLDfqLrbLjwbZSSt1KUkrUkeIABPnhDXWvwinB6UnY20dyjfHQtiVCjT97nOa7ZuN+oOOUaM6KekJjLdKiflWhyT/AGjCk42sLlLCfysjnyucfdQdU40CoJhuQ3FuCMztKLW27BbHQoubEVyhZgmiKpsMsNgAnzXbDDtU7IAHw94q3G3sx+0BzRMk5fImSC+VZngMIcPUgupJGPQTN1YS3kGojcLqQlP3UMec+jDbrtJoDcKO5JXKzWy+pLKCruIub8eAAvfF6sUVzMMMxZzqkx1kFTaDYkA3tfAV6fyq5PhCK+KMoHOR5p1Kn5mrOaEw4702QuryGmm2UFaiAeAAMUgnQd/RvT/IENtsSFgzH65ICybzH+xUDbxCQ2UA+QHmcbLkDK9AyPEVGoNJi0ltay498u2Ap5R6qWrqo+pJw1V6OxmWjSafJULPiyCeqVDkED0Iv7YXapDdS1a9Yx0rii5bG6SbZOR6ZmBpbU2KXmyOrSihX3BBGEBWheXI9QUt1qQttKtyWZEha0j2Jtja6dS5sJ99taNrjSi2pPqMDapQn1ulxSgncf6uMc3S66pimSJ0PFVg3sAxH0KL9E+JOhNQIqXYTja2HGdlgGyggqSocpKevkRceRGM/HdofVshZ2nPUCjS5+XaoszgqI0VIikqO9tQSO6m5BHFrKA8MXho9kWJlWO5W3Gkmoy0bULUOUNnn/dwfYYN5nq3ydSiyQlKylSWyFC+5KlAEfrf2x0bZfaJQN/qJBbTau3UEp0njdnL8SRVnEikNvFtlpBddFyCEDj26YcNPoFQc0zzbNchsbkGO2lFh0K+Ti/tbvhZ071kD02REdoFbcSf8SpKuyUo24LiPyr8OSL+oxJOb/hczPo9kDNcdFSNep77rLrcuIhQWhtBuorbuSn1IJHrgk5K4HiPeA4EozSvTmhaWZZZpFGQohrlcl+ynXT4kn/gcY0qnzeEG9sIFNqPaIBJwwQZoCQL9MZJJ4mZXHSPceS44pIae7LnvG1yR6YLR24/zKH1guPgEJdWblN+tvAe2EuLOKSkg4NMVIlPPhjzIzNoZqtBZqaHXmbNTR3kuA2328D/AN4EUugx39jlZ45umOeVKt5gc2x30TQ8ypO8gKTYlJsfY4/TTjVPYbZZulCU2Fzc/fANmhpssFzDiPv9YWmsurQ1KfxCT1VemyB2Jciw2htBKdpcV9COAP1wBr7r02ZDQSFNtudotfThPIHubfbHO9UNw64EzJVyTfrg8Eg5EEwMYnYlVE2PewDqNQBYN+p6Y4Jksi4v1wEqM4B1pF+CCT9BjYeUwZ//2Q==',
        content: 'What a great portfolio! ❤️👩‍💻👨‍💻',
        profileUrl: 'https://www.linkedin.com/in/aydon-jon-cupido-22b513286/',
        image: null,
        video: null,
    },

];

const Testimonials = () => {

    return (
        <div className="max-w-2xl mx-auto p-4">

            <div className="text-gray-500 font-semibold mb-4 flex items-center">
                <i className="fas fa-thumbtack mr-2"></i> &nbsp; Pinned Post 📌
            </div>

            {/* First Post (Post with id 1) */}
            {postsData.slice(0, 1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800 ">
                    <div className="flex items-center mb-2">
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <a href={post.profileUrl} className="font-bold hover:underline cursor-pointer">{post.user}&nbsp;&nbsp; 🔗</a>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>
                    <ContactFormModal />

                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            ))}

            {/* Regular Posts */}
            {postsData.slice(1).map(post => (
                <div key={post.id} className="bg-gray-950 p-4 rounded-lg shadow-md mb-4 hover:bg-gray-800 ">
                    <div className="flex items-center mb-2">
                        {/* Profile image */}
                        <img
                            src={post.profileImage}
                            alt="Profile"
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <a href={post.profileUrl} className="font-bold hover:underline">{post.user}&nbsp;&nbsp; 🔗</a>
                            <p className="text-sm text-gray-500">{post.username}</p>
                        </div>
                    </div>
                    <p className="mb-2">{post.content}</p>

                    {/* Conditional rendering for image or video */}
                    {post.image && (
                        <div className="mb-2">
                            <img src={post.image} alt="Post Media" className="w-full rounded-lg" />
                        </div>
                    )}

                    {post.video && (
                        <div className="mb-2">
                            <video controls className="w-full rounded-lg">
                                <source src={post.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
