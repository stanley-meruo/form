This are the guideline for contributing in an organization. Collaboration can be done using the "fork and branch" workflow, follow this steps:

1. Go to the repo in the organization {community website}(https://github.com/Bivylightspace/community_website)

 2. To contribute, you have to fork the repo. But this repo will fork by the leader of the team {code repo}(https://github.com/Anniedevkiller/community_website/fork).

 3. HOW WILL YOUR MEMBER COLLARBORATE?  Well as the team leader you are to send Github collboration invitations to the people in your team and are assigned to.

 4. Clone the fork repo by using this command {git clone <your - forked - repo - url>}

 5. Add the original repo as remote to keep is sync by usin this command
{cd <cloned- repo- folder>
git remote add upstream https://github.com/Bivylightspace/community_website}

6. create a new branch, before you make an changes please use a new branch and not your master/main branch
this the command in doing it {git branch <branch - name>} and the branch name should be your github username

7. Switch to new branch by usin this command {git checkout <branch - name>}

8. To make changes in your local base you have to add and commit by using this command {git add filename
git commit -m "descriptive commit"}
N.B please make sure your commit message are very professional

9. Create a pull request will be made by your leader
Go to the forked repo, switch to the branch you created and click on PULL REQUEST this will make you to submit your changes, MAKE SURE YOUR PULL REQUEST IS IMPORANT AND DESCRIPTIVE AND TAG CODE REVIEW TEAM

10. Wait for your pull request to be merged, once your Pr is merge  you need to sync your forked repo with the changes made in the original repo by using the command {git fetch upstream
git merge upstream/main  # or upstream/master for older conventions}

So all update will be  made by following this steps
N.B only the team leaders are allowed to fork the repo and the leaders will send invites to the remaining members

A Google docs will be send to the members.